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

import {
  DescribeInferenceRecommendationsJobRequest,
  DescribeInferenceRecommendationsJobResponse,
} from "../models/models_2";
import {
  de_DescribeInferenceRecommendationsJobCommand,
  se_DescribeInferenceRecommendationsJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeInferenceRecommendationsJobCommand}.
 */
export interface DescribeInferenceRecommendationsJobCommandInput extends DescribeInferenceRecommendationsJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInferenceRecommendationsJobCommand}.
 */
export interface DescribeInferenceRecommendationsJobCommandOutput
  extends DescribeInferenceRecommendationsJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides the results of the Inference Recommender job.
 *           One or more recommendation jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeInferenceRecommendationsJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeInferenceRecommendationsJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeInferenceRecommendationsJobRequest
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInferenceRecommendationsJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInferenceRecommendationsJobResponse
 * //   JobName: "STRING_VALUE", // required
 * //   JobDescription: "STRING_VALUE",
 * //   JobType: "Default" || "Advanced", // required
 * //   JobArn: "STRING_VALUE", // required
 * //   RoleArn: "STRING_VALUE", // required
 * //   Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   InputConfig: { // RecommendationJobInputConfig
 * //     ModelPackageVersionArn: "STRING_VALUE",
 * //     JobDurationInSeconds: Number("int"),
 * //     TrafficPattern: { // TrafficPattern
 * //       TrafficType: "PHASES",
 * //       Phases: [ // Phases
 * //         { // Phase
 * //           InitialNumberOfUsers: Number("int"),
 * //           SpawnRate: Number("int"),
 * //           DurationInSeconds: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     ResourceLimit: { // RecommendationJobResourceLimit
 * //       MaxNumberOfTests: Number("int"),
 * //       MaxParallelOfTests: Number("int"),
 * //     },
 * //     EndpointConfigurations: [ // EndpointInputConfigurations
 * //       { // EndpointInputConfiguration
 * //         InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge", // required
 * //         InferenceSpecificationName: "STRING_VALUE",
 * //         EnvironmentParameterRanges: { // EnvironmentParameterRanges
 * //           CategoricalParameterRanges: [ // CategoricalParameters
 * //             { // CategoricalParameter
 * //               Name: "STRING_VALUE", // required
 * //               Value: [ // CategoricalParameterRangeValues // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     ContainerConfig: { // RecommendationJobContainerConfig
 * //       Domain: "STRING_VALUE",
 * //       Task: "STRING_VALUE",
 * //       Framework: "STRING_VALUE",
 * //       FrameworkVersion: "STRING_VALUE",
 * //       PayloadConfig: { // RecommendationJobPayloadConfig
 * //         SamplePayloadUrl: "STRING_VALUE",
 * //         SupportedContentTypes: [ // RecommendationJobSupportedContentTypes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       NearestModelName: "STRING_VALUE",
 * //       SupportedInstanceTypes: [ // RecommendationJobSupportedInstanceTypes
 * //         "STRING_VALUE",
 * //       ],
 * //       DataInputConfig: "STRING_VALUE",
 * //     },
 * //     Endpoints: [ // Endpoints
 * //       { // EndpointInfo
 * //         EndpointName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     VpcConfig: { // RecommendationJobVpcConfig
 * //       SecurityGroupIds: [ // RecommendationJobVpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // RecommendationJobVpcSubnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ModelName: "STRING_VALUE",
 * //   },
 * //   StoppingConditions: { // RecommendationJobStoppingConditions
 * //     MaxInvocations: Number("int"),
 * //     ModelLatencyThresholds: [ // ModelLatencyThresholds
 * //       { // ModelLatencyThreshold
 * //         Percentile: "STRING_VALUE",
 * //         ValueInMilliseconds: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   InferenceRecommendations: [ // InferenceRecommendations
 * //     { // InferenceRecommendation
 * //       Metrics: { // RecommendationMetrics
 * //         CostPerHour: Number("float"), // required
 * //         CostPerInference: Number("float"), // required
 * //         MaxInvocations: Number("int"), // required
 * //         ModelLatency: Number("int"), // required
 * //         CpuUtilization: Number("float"),
 * //         MemoryUtilization: Number("float"),
 * //       },
 * //       EndpointConfiguration: { // EndpointOutputConfiguration
 * //         EndpointName: "STRING_VALUE", // required
 * //         VariantName: "STRING_VALUE", // required
 * //         InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge", // required
 * //         InitialInstanceCount: Number("int"), // required
 * //       },
 * //       ModelConfiguration: { // ModelConfiguration
 * //         InferenceSpecificationName: "STRING_VALUE",
 * //         EnvironmentParameters: [ // EnvironmentParameters
 * //           { // EnvironmentParameter
 * //             Key: "STRING_VALUE", // required
 * //             ValueType: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         CompilationJobName: "STRING_VALUE",
 * //       },
 * //       RecommendationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EndpointPerformances: [ // EndpointPerformances
 * //     { // EndpointPerformance
 * //       Metrics: { // InferenceMetrics
 * //         MaxInvocations: Number("int"), // required
 * //         ModelLatency: Number("int"), // required
 * //       },
 * //       EndpointInfo: {
 * //         EndpointName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInferenceRecommendationsJobCommandInput - {@link DescribeInferenceRecommendationsJobCommandInput}
 * @returns {@link DescribeInferenceRecommendationsJobCommandOutput}
 * @see {@link DescribeInferenceRecommendationsJobCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceRecommendationsJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeInferenceRecommendationsJobCommand extends $Command<
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeInferenceRecommendationsJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInferenceRecommendationsJobCommandInput, DescribeInferenceRecommendationsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInferenceRecommendationsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeInferenceRecommendationsJobCommand";
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
  private serialize(
    input: DescribeInferenceRecommendationsJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInferenceRecommendationsJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInferenceRecommendationsJobCommandOutput> {
    return de_DescribeInferenceRecommendationsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
