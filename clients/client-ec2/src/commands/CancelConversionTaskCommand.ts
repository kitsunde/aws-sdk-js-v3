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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelConversionRequest } from "../models/models_0";
import { de_CancelConversionTaskCommand, se_CancelConversionTaskCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CancelConversionTaskCommand}.
 */
export interface CancelConversionTaskCommandInput extends CancelConversionRequest {}
/**
 * @public
 *
 * The output of {@link CancelConversionTaskCommand}.
 */
export interface CancelConversionTaskCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all
 *    artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is
 *    in the process of transferring the final disk image, the command fails and returns an exception.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon
 *     EC2 CLI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelConversionTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelConversionTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelConversionRequest
 *   ConversionTaskId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   ReasonMessage: "STRING_VALUE",
 * };
 * const command = new CancelConversionTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelConversionTaskCommandInput - {@link CancelConversionTaskCommandInput}
 * @returns {@link CancelConversionTaskCommandOutput}
 * @see {@link CancelConversionTaskCommandInput} for command's `input` shape.
 * @see {@link CancelConversionTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CancelConversionTaskCommand extends $Command<
  CancelConversionTaskCommandInput,
  CancelConversionTaskCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: CancelConversionTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelConversionTaskCommandInput, CancelConversionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelConversionTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelConversionTaskCommand";
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
  private serialize(input: CancelConversionTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelConversionTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelConversionTaskCommandOutput> {
    return de_CancelConversionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
