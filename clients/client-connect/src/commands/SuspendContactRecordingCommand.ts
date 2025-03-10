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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SuspendContactRecordingRequest, SuspendContactRecordingResponse } from "../models/models_1";
import { de_SuspendContactRecordingCommand, se_SuspendContactRecordingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandInput extends SuspendContactRecordingRequest {}
/**
 * @public
 *
 * The output of {@link SuspendContactRecordingCommand}.
 */
export interface SuspendContactRecordingCommandOutput extends SuspendContactRecordingResponse, __MetadataBearer {}

/**
 * @public
 * <p>When a contact is being recorded, this API suspends recording the call. For example, you
 *    might suspend the call recording while collecting sensitive information, such as a credit card
 *    number. Then use ResumeContactRecording to restart recording. </p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final
 *    recording. </p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SuspendContactRecordingRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   InitialContactId: "STRING_VALUE", // required
 * };
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SuspendContactRecordingCommandInput - {@link SuspendContactRecordingCommandInput}
 * @returns {@link SuspendContactRecordingCommandOutput}
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SuspendContactRecordingCommand extends $Command<
  SuspendContactRecordingCommandInput,
  SuspendContactRecordingCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SuspendContactRecordingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SuspendContactRecordingCommandInput, SuspendContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SuspendContactRecordingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SuspendContactRecordingCommand";
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
  private serialize(input: SuspendContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SuspendContactRecordingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuspendContactRecordingCommandOutput> {
    return de_SuspendContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
