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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteTaskSetRequest, DeleteTaskSetResponse } from "../models/models_0";
import { de_DeleteTaskSetCommand, se_DeleteTaskSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteTaskSetCommand}.
 */
export interface DeleteTaskSetCommandInput extends DeleteTaskSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskSetCommand}.
 */
export interface DeleteTaskSetCommandOutput extends DeleteTaskSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a specified task set within a service. This is used when a service uses the
 * 				<code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeleteTaskSetRequest
 *   cluster: "STRING_VALUE", // required
 *   service: "STRING_VALUE", // required
 *   taskSet: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteTaskSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTaskSetResponse
 * //   taskSet: { // TaskSet
 * //     id: "STRING_VALUE",
 * //     taskSetArn: "STRING_VALUE",
 * //     serviceArn: "STRING_VALUE",
 * //     clusterArn: "STRING_VALUE",
 * //     startedBy: "STRING_VALUE",
 * //     externalId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     taskDefinition: "STRING_VALUE",
 * //     computedDesiredCount: Number("int"),
 * //     pendingCount: Number("int"),
 * //     runningCount: Number("int"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * //     capacityProviderStrategy: [ // CapacityProviderStrategy
 * //       { // CapacityProviderStrategyItem
 * //         capacityProvider: "STRING_VALUE", // required
 * //         weight: Number("int"),
 * //         base: Number("int"),
 * //       },
 * //     ],
 * //     platformVersion: "STRING_VALUE",
 * //     platformFamily: "STRING_VALUE",
 * //     networkConfiguration: { // NetworkConfiguration
 * //       awsvpcConfiguration: { // AwsVpcConfiguration
 * //         subnets: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         assignPublicIp: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //     loadBalancers: [ // LoadBalancers
 * //       { // LoadBalancer
 * //         targetGroupArn: "STRING_VALUE",
 * //         loadBalancerName: "STRING_VALUE",
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //       },
 * //     ],
 * //     serviceRegistries: [ // ServiceRegistries
 * //       { // ServiceRegistry
 * //         registryArn: "STRING_VALUE",
 * //         port: Number("int"),
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //       },
 * //     ],
 * //     scale: { // Scale
 * //       value: Number("double"),
 * //       unit: "PERCENT",
 * //     },
 * //     stabilityStatus: "STEADY_STATE" || "STABILIZING",
 * //     stabilityStatusAt: new Date("TIMESTAMP"),
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTaskSetCommandInput - {@link DeleteTaskSetCommandInput}
 * @returns {@link DeleteTaskSetCommandOutput}
 * @see {@link DeleteTaskSetCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotActiveException} (client fault)
 *  <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link TaskSetNotFoundException} (client fault)
 *  <p>The specified task set wasn't found. You can view your available task sets with <a>DescribeTaskSets</a>. Task sets are specific to each cluster, service and
 * 			Region.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class DeleteTaskSetCommand extends $Command<
  DeleteTaskSetCommandInput,
  DeleteTaskSetCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: DeleteTaskSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTaskSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteTaskSetCommand";
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
  private serialize(input: DeleteTaskSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTaskSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTaskSetCommandOutput> {
    return de_DeleteTaskSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
