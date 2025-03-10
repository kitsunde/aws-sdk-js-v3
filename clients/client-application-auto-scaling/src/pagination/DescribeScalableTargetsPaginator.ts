// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalableTargetsCommand,
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationAutoScalingClient,
  input: DescribeScalableTargetsCommandInput,
  ...args: any
): Promise<DescribeScalableTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalableTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeScalableTargets(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalableTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalableTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScalableTargetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationAutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationAutoScaling | ApplicationAutoScalingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
