import * as Actions from '../actions/SPFxActionCreators';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import { IODataListItem } from '@microsoft/sp-odata-types';

export function getLibraryItems(spHttpClient: SPHttpClient, currentWebUrl: string, libraryName: string) {
  return async (dispatch: any) => {

    dispatch(Actions.getLibraryItemsRequest());

    try {
      const response: SPHttpClientResponse = await spHttpClient.get(`${currentWebUrl}/_api/web/lists/GetByTitle('${libraryName}')/items?$select=FileLeafRef,FileRef,FileDirRef,FSObjType,BaseName,DocIcon,Folder/ItemCount&$expand=Folder/ItemCount&$orderby=FileRef`, SPHttpClient.configurations.v1);
      const responseJSON = await response.json();
      const listItems: any[] = responseJSON.value;
      dispatch(Actions.getLibraryItemsSuccess(listItems));

    } catch (error) {
      dispatch(Actions.getLibraryItemsError(error));
    }
  };
}
