// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "../commands/ListMobileDeviceAccessOverridesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListMobileDeviceAccessOverridesCommandInput,
  ...args: any
): Promise<ListMobileDeviceAccessOverridesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMobileDeviceAccessOverridesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMobileDeviceAccessOverrides(
  config: WorkMailPaginationConfiguration,
  input: ListMobileDeviceAccessOverridesCommandInput,
  ...additionalArguments: any
): Paginator<ListMobileDeviceAccessOverridesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMobileDeviceAccessOverridesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
