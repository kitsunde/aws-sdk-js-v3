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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessGatewayFromCertificateRequest,
  DisassociateWirelessGatewayFromCertificateResponse,
} from "../models/models_0";
import {
  de_DisassociateWirelessGatewayFromCertificateCommand,
  se_DisassociateWirelessGatewayFromCertificateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandInput
  extends DisassociateWirelessGatewayFromCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandOutput
  extends DisassociateWirelessGatewayFromCertificateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessGatewayFromCertificateRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessGatewayFromCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessGatewayFromCertificateCommandInput - {@link DisassociateWirelessGatewayFromCertificateCommandInput}
 * @returns {@link DisassociateWirelessGatewayFromCertificateCommandOutput}
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class DisassociateWirelessGatewayFromCertificateCommand extends $Command<
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: DisassociateWirelessGatewayFromCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateWirelessGatewayFromCertificateCommandInput,
    DisassociateWirelessGatewayFromCertificateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateWirelessGatewayFromCertificateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateWirelessGatewayFromCertificateCommand";
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
    input: DisassociateWirelessGatewayFromCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateWirelessGatewayFromCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> {
    return de_DisassociateWirelessGatewayFromCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
