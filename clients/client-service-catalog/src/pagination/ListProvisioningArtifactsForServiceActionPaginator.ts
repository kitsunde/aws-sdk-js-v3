// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProvisioningArtifactsForServiceActionCommand,
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "../commands/ListProvisioningArtifactsForServiceActionCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...args: any
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisioningArtifactsForServiceActionCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProvisioningArtifactsForServiceAction(
  config: ServiceCatalogPaginationConfiguration,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisioningArtifactsForServiceActionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisioningArtifactsForServiceActionCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
