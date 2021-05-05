import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrainingJobRequest, DescribeTrainingJobResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeTrainingJobCommand,
  serializeAws_json1_1DescribeTrainingJobCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeTrainingJobCommandInput extends DescribeTrainingJobRequest {}
export interface DescribeTrainingJobCommandOutput extends DescribeTrainingJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a training job. </p>
 *         <p>Some of the attributes below only appear if the training job successfully starts.
 *             If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and,
 *             depending on the <code>FailureReason</code>, attributes like
 *                 <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>,
 *                 <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be
 *             present in the response.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrainingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTrainingJobCommand extends $Command<
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrainingJobCommandInput) {
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
  ): Handler<DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrainingJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrainingJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrainingJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrainingJobCommandOutput> {
    return deserializeAws_json1_1DescribeTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
