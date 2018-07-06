import * as Actions from '../actions/SPFxActionCreators';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import { IODataListItem } from '@microsoft/sp-odata-types';

export function getLibraryItems(spHttpClient: SPHttpClient, currentWebUrl: string, libraryName: string) {
  return async (dispatch: any) => {

    dispatch(Actions.getLibraryItemsRequest());

    try {
      const select: string[] = [
        'FileLeafRef',
        'FileRef',
        'FileDirRef',
        'FSObjType',
        'BaseName',
        'DocIcon',
        'Folder/ItemCount'
      ];
      const expand: string[] = [
        'Folder/ItemCount'
      ];
      const orderby: string = 'FileRef';
      const top: number = 100;

      const query = `?$select=${select.join(',')}&$expand=${expand.join(',')}&$orderby=${orderby}&$top=${top}`;
      const url = `${currentWebUrl}/_api/web/lists/GetByTitle('${libraryName}')/items${query}`;

      const response: SPHttpClientResponse = await spHttpClient.get(url, SPHttpClient.configurations.v1);
      const responseJSON = await response.json();
      const listItems: any[] = responseJSON.value;
      dispatch(Actions.getLibraryItemsSuccess(listItems));

    } catch (error) {
      dispatch(Actions.getLibraryItemsError(error));
    }
  };
}
