// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "../commands/ListOrganizationPortfolioAccessCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...args: any
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationPortfolioAccessCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrganizationPortfolioAccess(
  config: ServiceCatalogPaginationConfiguration,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationPortfolioAccessCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationPortfolioAccessCommandOutput;
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
