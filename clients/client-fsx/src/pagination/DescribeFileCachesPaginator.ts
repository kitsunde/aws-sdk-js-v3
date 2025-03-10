// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFileCachesCommand,
  DescribeFileCachesCommandInput,
  DescribeFileCachesCommandOutput,
} from "../commands/DescribeFileCachesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileCachesCommandInput,
  ...args: any
): Promise<DescribeFileCachesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileCachesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFileCaches(
  config: FSxPaginationConfiguration,
  input: DescribeFileCachesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileCachesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileCachesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
