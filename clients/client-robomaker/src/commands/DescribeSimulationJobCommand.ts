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

import { DescribeSimulationJobRequest, DescribeSimulationJobResponse } from "../models/models_0";
import { de_DescribeSimulationJobCommand, se_DescribeSimulationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeSimulationJobCommand}.
 */
export interface DescribeSimulationJobCommandInput extends DescribeSimulationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationJobCommand}.
 */
export interface DescribeSimulationJobCommandOutput extends DescribeSimulationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeSimulationJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new DescribeSimulationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationJobResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   lastStartedAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   failureBehavior: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   outputLocation: { // OutputLocation
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Prefix: "STRING_VALUE",
 * //   },
 * //   loggingConfig: { // LoggingConfig
 * //     recordAllRosTopics: true || false,
 * //   },
 * //   maxJobDurationInSeconds: Number("long"),
 * //   simulationTimeMillis: Number("long"),
 * //   iamRole: "STRING_VALUE",
 * //   robotApplications: [ // RobotApplicationConfigs
 * //     { // RobotApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE",
 * //       launchConfig: { // LaunchConfig
 * //         packageName: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE",
 * //         environmentVariables: { // EnvironmentVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         portForwardingConfig: { // PortForwardingConfig
 * //           portMappings: [ // PortMappingList
 * //             { // PortMapping
 * //               jobPort: Number("int"), // required
 * //               applicationPort: Number("int"), // required
 * //               enableOnPublicIp: true || false,
 * //             },
 * //           ],
 * //         },
 * //         streamUI: true || false,
 * //         command: [ // CommandList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       uploadConfigurations: [ // UploadConfigurations
 * //         { // UploadConfiguration
 * //           name: "STRING_VALUE", // required
 * //           path: "STRING_VALUE", // required
 * //           uploadBehavior: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       useDefaultUploadConfigurations: true || false,
 * //       tools: [ // Tools
 * //         { // Tool
 * //           streamUI: true || false,
 * //           name: "STRING_VALUE", // required
 * //           command: "STRING_VALUE", // required
 * //           streamOutputToCloudWatch: true || false,
 * //           exitBehavior: "STRING_VALUE",
 * //         },
 * //       ],
 * //       useDefaultTools: true || false,
 * //     },
 * //   ],
 * //   simulationApplications: [ // SimulationApplicationConfigs
 * //     { // SimulationApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE",
 * //       launchConfig: {
 * //         packageName: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE",
 * //         environmentVariables: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         portForwardingConfig: {
 * //           portMappings: [
 * //             {
 * //               jobPort: Number("int"), // required
 * //               applicationPort: Number("int"), // required
 * //               enableOnPublicIp: true || false,
 * //             },
 * //           ],
 * //         },
 * //         streamUI: true || false,
 * //         command: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       uploadConfigurations: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           path: "STRING_VALUE", // required
 * //           uploadBehavior: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       worldConfigs: [ // WorldConfigs
 * //         { // WorldConfig
 * //           world: "STRING_VALUE",
 * //         },
 * //       ],
 * //       useDefaultUploadConfigurations: true || false,
 * //       tools: [
 * //         {
 * //           streamUI: true || false,
 * //           name: "STRING_VALUE", // required
 * //           command: "STRING_VALUE", // required
 * //           streamOutputToCloudWatch: true || false,
 * //           exitBehavior: "STRING_VALUE",
 * //         },
 * //       ],
 * //       useDefaultTools: true || false,
 * //     },
 * //   ],
 * //   dataSources: [ // DataSources
 * //     { // DataSource
 * //       name: "STRING_VALUE",
 * //       s3Bucket: "STRING_VALUE",
 * //       s3Keys: [ // S3KeyOutputs
 * //         { // S3KeyOutput
 * //           s3Key: "STRING_VALUE",
 * //           etag: "STRING_VALUE",
 * //         },
 * //       ],
 * //       type: "STRING_VALUE",
 * //       destination: "STRING_VALUE",
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   vpcConfig: { // VPCConfigResponse
 * //     subnets: [ // Subnets
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroups: [ // SecurityGroups
 * //       "STRING_VALUE",
 * //     ],
 * //     vpcId: "STRING_VALUE",
 * //     assignPublicIp: true || false,
 * //   },
 * //   networkInterface: { // NetworkInterface
 * //     networkInterfaceId: "STRING_VALUE",
 * //     privateIpAddress: "STRING_VALUE",
 * //     publicIpAddress: "STRING_VALUE",
 * //   },
 * //   compute: { // ComputeResponse
 * //     simulationUnitLimit: Number("int"),
 * //     computeType: "STRING_VALUE",
 * //     gpuUnitLimit: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSimulationJobCommandInput - {@link DescribeSimulationJobCommandInput}
 * @returns {@link DescribeSimulationJobCommandOutput}
 * @see {@link DescribeSimulationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class DescribeSimulationJobCommand extends $Command<
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: DescribeSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSimulationJobCommandInput, DescribeSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSimulationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeSimulationJobCommand";
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
  private serialize(input: DescribeSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSimulationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSimulationJobCommandOutput> {
    return de_DescribeSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
