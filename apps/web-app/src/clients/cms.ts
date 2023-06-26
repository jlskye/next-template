import type { ContentData } from "@vtex/client-cms";
import ClientCMS from "@vtex/client-cms";

export const clientCMS = new ClientCMS({
  workspace: "master",
  tenant: "storeId",
});

export const getCMSPageDataByContentType = async (contentType: string): Promise<ContentData> => {
  const {
    data: [cmsHome],
  } = await clientCMS.getCMSPagesByContentType(contentType);

  if (!cmsHome) {
    const { tenant } = clientCMS.getOptions();

    console.error(
      `Missing '${contentType}' data from CMS. To prevent this warning, open https://${tenant}.myvtex.com/admin/new-cms and create a new content from the 'home' template. Falling back to default '${contentType}' template`,
    );
  }

  return cmsHome;
};
