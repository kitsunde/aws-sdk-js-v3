// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeNodegroupRequest, DescribeNodegroupResponse } from "../models/models_0";
import { de_DescribeNodegroupCommand, se_DescribeNodegroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeNodegroupCommand}.
 */
export interface DescribeNodegroupCommandInput extends DescribeNodegroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodegroupCommand}.
 */
export interface DescribeNodegroupCommandOutput extends DescribeNodegroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns descriptive information about an Amazon EKS node group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeNodegroupRequest
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeNodegroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodegroupResponse
 * //   nodegroup: { // Nodegroup
 * //     nodegroupName: "STRING_VALUE",
 * //     nodegroupArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     releaseVersion: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "DEGRADED",
 * //     capacityType: "ON_DEMAND" || "SPOT",
 * //     scalingConfig: { // NodegroupScalingConfig
 * //       minSize: Number("int"),
 * //       maxSize: Number("int"),
 * //       desiredSize: Number("int"),
 * //     },
 * //     instanceTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnets: [
 * //       "STRING_VALUE",
 * //     ],
 * //     remoteAccess: { // RemoteAccessConfig
 * //       ec2SshKey: "STRING_VALUE",
 * //       sourceSecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     amiType: "AL2_x86_64" || "AL2_x86_64_GPU" || "AL2_ARM_64" || "CUSTOM" || "BOTTLEROCKET_ARM_64" || "BOTTLEROCKET_x86_64" || "BOTTLEROCKET_ARM_64_NVIDIA" || "BOTTLEROCKET_x86_64_NVIDIA" || "WINDOWS_CORE_2019_x86_64" || "WINDOWS_FULL_2019_x86_64" || "WINDOWS_CORE_2022_x86_64" || "WINDOWS_FULL_2022_x86_64",
 * //     nodeRole: "STRING_VALUE",
 * //     labels: { // labelsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     taints: [ // taintsList
 * //       { // Taint
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 * //       },
 * //     ],
 * //     resources: { // NodegroupResources
 * //       autoScalingGroups: [ // AutoScalingGroupList
 * //         { // AutoScalingGroup
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       remoteAccessSecurityGroup: "STRING_VALUE",
 * //     },
 * //     diskSize: Number("int"),
 * //     health: { // NodegroupHealth
 * //       issues: [ // IssueList
 * //         { // Issue
 * //           code: "AutoScalingGroupNotFound" || "AutoScalingGroupInvalidConfiguration" || "Ec2SecurityGroupNotFound" || "Ec2SecurityGroupDeletionFailure" || "Ec2LaunchTemplateNotFound" || "Ec2LaunchTemplateVersionMismatch" || "Ec2SubnetNotFound" || "Ec2SubnetInvalidConfiguration" || "IamInstanceProfileNotFound" || "IamLimitExceeded" || "IamNodeRoleNotFound" || "NodeCreationFailure" || "AsgInstanceLaunchFailures" || "InstanceLimitExceeded" || "InsufficientFreeAddresses" || "AccessDenied" || "InternalFailure" || "ClusterUnreachable" || "Ec2SubnetMissingIpv6Assignment",
 * //           message: "STRING_VALUE",
 * //           resourceIds: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     updateConfig: { // NodegroupUpdateConfig
 * //       maxUnavailable: Number("int"),
 * //       maxUnavailablePercentage: Number("int"),
 * //     },
 * //     launchTemplate: { // LaunchTemplateSpecification
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNodegroupCommandInput - {@link DescribeNodegroupCommandInput}
 * @returns {@link DescribeNodegroupCommandOutput}
 * @see {@link DescribeNodegroupCommandInput} for command's `input` shape.
 * @see {@link DescribeNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DescribeNodegroupCommand extends $Command<
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeNodegroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNodegroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNodegroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNodegroupCommandOutput> {
    return de_DescribeNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
