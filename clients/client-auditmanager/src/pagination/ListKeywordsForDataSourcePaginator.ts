// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListKeywordsForDataSourceCommand,
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "../commands/ListKeywordsForDataSourceCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListKeywordsForDataSourceCommandInput,
  ...args: any
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeywordsForDataSourceCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKeywordsForDataSource(
  config: AuditManagerPaginationConfiguration,
  input: ListKeywordsForDataSourceCommandInput,
  ...additionalArguments: any
): Paginator<ListKeywordsForDataSourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeywordsForDataSourceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
