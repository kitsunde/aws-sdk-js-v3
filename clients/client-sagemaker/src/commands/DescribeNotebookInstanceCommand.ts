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

import { DescribeNotebookInstanceInput, DescribeNotebookInstanceOutput } from "../models/models_2";
import { de_DescribeNotebookInstanceCommand, se_DescribeNotebookInstanceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeNotebookInstanceCommand}.
 */
export interface DescribeNotebookInstanceCommandInput extends DescribeNotebookInstanceInput {}
/**
 * @public
 *
 * The output of {@link DescribeNotebookInstanceCommand}.
 */
export interface DescribeNotebookInstanceCommandOutput extends DescribeNotebookInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a notebook instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeNotebookInstanceInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotebookInstanceOutput
 * //   NotebookInstanceArn: "STRING_VALUE",
 * //   NotebookInstanceName: "STRING_VALUE",
 * //   NotebookInstanceStatus: "Pending" || "InService" || "Stopping" || "Stopped" || "Failed" || "Deleting" || "Updating",
 * //   FailureReason: "STRING_VALUE",
 * //   Url: "STRING_VALUE",
 * //   InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge",
 * //   SubnetId: "STRING_VALUE",
 * //   SecurityGroups: [ // SecurityGroupIds
 * //     "STRING_VALUE",
 * //   ],
 * //   RoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   NotebookInstanceLifecycleConfigName: "STRING_VALUE",
 * //   DirectInternetAccess: "Enabled" || "Disabled",
 * //   VolumeSizeInGB: Number("int"),
 * //   AcceleratorTypes: [ // NotebookInstanceAcceleratorTypes
 * //     "ml.eia1.medium" || "ml.eia1.large" || "ml.eia1.xlarge" || "ml.eia2.medium" || "ml.eia2.large" || "ml.eia2.xlarge",
 * //   ],
 * //   DefaultCodeRepository: "STRING_VALUE",
 * //   AdditionalCodeRepositories: [ // AdditionalCodeRepositoryNamesOrUrls
 * //     "STRING_VALUE",
 * //   ],
 * //   RootAccess: "Enabled" || "Disabled",
 * //   PlatformIdentifier: "STRING_VALUE",
 * //   InstanceMetadataServiceConfiguration: { // InstanceMetadataServiceConfiguration
 * //     MinimumInstanceMetadataServiceVersion: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotebookInstanceCommandInput - {@link DescribeNotebookInstanceCommandInput}
 * @returns {@link DescribeNotebookInstanceCommandOutput}
 * @see {@link DescribeNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeNotebookInstanceCommand extends $Command<
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
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
  constructor(readonly input: DescribeNotebookInstanceCommandInput) {
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
  ): Handler<DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNotebookInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeNotebookInstanceCommand";
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
  private serialize(input: DescribeNotebookInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNotebookInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNotebookInstanceCommandOutput> {
    return de_DescribeNotebookInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
