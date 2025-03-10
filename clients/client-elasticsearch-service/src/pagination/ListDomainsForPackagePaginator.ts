// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListDomainsForPackageCommandInput,
  ...args: any
): Promise<ListDomainsForPackageCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsForPackageCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDomainsForPackage(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListDomainsForPackageCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsForPackageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsForPackageCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
