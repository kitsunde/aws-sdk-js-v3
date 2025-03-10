// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "../commands/DescribeConformancePackComplianceCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConformancePackComplianceCommandInput,
  ...args: any
): Promise<DescribeConformancePackComplianceCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConformancePackComplianceCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeConformancePackCompliance(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePackComplianceCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConformancePackComplianceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConformancePackComplianceCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
