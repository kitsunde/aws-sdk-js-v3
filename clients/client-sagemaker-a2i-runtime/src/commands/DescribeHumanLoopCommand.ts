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

import { DescribeHumanLoopRequest, DescribeHumanLoopResponse } from "../models/models_0";
import { de_DescribeHumanLoopCommand, se_DescribeHumanLoopCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";

/**
 * @public
 *
 * The input for {@link DescribeHumanLoopCommand}.
 */
export interface DescribeHumanLoopCommandInput extends DescribeHumanLoopRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHumanLoopCommand}.
 */
export interface DescribeHumanLoopCommandOutput extends DescribeHumanLoopResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified human loop. If the human loop was deleted, this
 *       operation will return a <code>ResourceNotFoundException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // DescribeHumanLoopRequest
 *   HumanLoopName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHumanLoopCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHumanLoopResponse
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   FailureCode: "STRING_VALUE",
 * //   HumanLoopStatus: "STRING_VALUE", // required
 * //   HumanLoopName: "STRING_VALUE", // required
 * //   HumanLoopArn: "STRING_VALUE", // required
 * //   FlowDefinitionArn: "STRING_VALUE", // required
 * //   HumanLoopOutput: { // HumanLoopOutput
 * //     OutputS3Uri: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHumanLoopCommandInput - {@link DescribeHumanLoopCommandInput}
 * @returns {@link DescribeHumanLoopCommandOutput}
 * @see {@link DescribeHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link SageMakerA2IRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerA2IRuntime service.</p>
 *
 */
export class DescribeHumanLoopCommand extends $Command<
  DescribeHumanLoopCommandInput,
  DescribeHumanLoopCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
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
  constructor(readonly input: DescribeHumanLoopCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerA2IRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHumanLoopCommandInput, DescribeHumanLoopCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHumanLoopCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerA2IRuntimeClient";
    const commandName = "DescribeHumanLoopCommand";
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
  private serialize(input: DescribeHumanLoopCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHumanLoopCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHumanLoopCommandOutput> {
    return de_DescribeHumanLoopCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
