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
import { CancelImportTaskRequest, CancelImportTaskResult } from "../models/models_0";
import { de_CancelImportTaskCommand, se_CancelImportTaskCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandInput extends CancelImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandOutput extends CancelImportTaskResult, __MetadataBearer {}

/**
 * @public
 * <p>Cancels an in-process import virtual machine or import snapshot task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelImportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelImportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelImportTaskRequest
 *   CancelReason: "STRING_VALUE",
 *   DryRun: true || false,
 *   ImportTaskId: "STRING_VALUE",
 * };
 * const command = new CancelImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelImportTaskResult
 * //   ImportTaskId: "STRING_VALUE",
 * //   PreviousState: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelImportTaskCommandInput - {@link CancelImportTaskCommandInput}
 * @returns {@link CancelImportTaskCommandOutput}
 * @see {@link CancelImportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelImportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CancelImportTaskCommand extends $Command<
  CancelImportTaskCommandInput,
  CancelImportTaskCommandOutput,
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
  constructor(readonly input: CancelImportTaskCommandInput) {
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
  ): Handler<CancelImportTaskCommandInput, CancelImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelImportTaskCommand";
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
  private serialize(input: CancelImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelImportTaskCommandOutput> {
    return de_CancelImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
