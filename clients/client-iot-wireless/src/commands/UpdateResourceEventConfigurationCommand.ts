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
import { UpdateResourceEventConfigurationRequest, UpdateResourceEventConfigurationResponse } from "../models/models_1";
import {
  de_UpdateResourceEventConfigurationCommand,
  se_UpdateResourceEventConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateResourceEventConfigurationCommand}.
 */
export interface UpdateResourceEventConfigurationCommandInput extends UpdateResourceEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceEventConfigurationCommand}.
 */
export interface UpdateResourceEventConfigurationCommandOutput
  extends UpdateResourceEventConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update the event configuration for a particular resource identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateResourceEventConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateResourceEventConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateResourceEventConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "PartnerAccountId" || "DevEui" || "GatewayEui" || "WirelessDeviceId" || "WirelessGatewayId", // required
 *   PartnerType: "Sidewalk",
 *   DeviceRegistrationState: { // DeviceRegistrationStateEventConfiguration
 *     Sidewalk: { // SidewalkEventNotificationConfigurations
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   Proximity: { // ProximityEventConfiguration
 *     Sidewalk: {
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   Join: { // JoinEventConfiguration
 *     LoRaWAN: { // LoRaWANJoinEventNotificationConfigurations
 *       DevEuiEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   ConnectionStatus: { // ConnectionStatusEventConfiguration
 *     LoRaWAN: { // LoRaWANConnectionStatusEventNotificationConfigurations
 *       GatewayEuiEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessGatewayIdEventTopic: "Enabled" || "Disabled",
 *   },
 *   MessageDeliveryStatus: { // MessageDeliveryStatusEventConfiguration
 *     Sidewalk: {
 *       AmazonIdEventTopic: "Enabled" || "Disabled",
 *     },
 *     WirelessDeviceIdEventTopic: "Enabled" || "Disabled",
 *   },
 * };
 * const command = new UpdateResourceEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceEventConfigurationCommandInput - {@link UpdateResourceEventConfigurationCommandInput}
 * @returns {@link UpdateResourceEventConfigurationCommandOutput}
 * @see {@link UpdateResourceEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class UpdateResourceEventConfigurationCommand extends $Command<
  UpdateResourceEventConfigurationCommandInput,
  UpdateResourceEventConfigurationCommandOutput,
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
  constructor(readonly input: UpdateResourceEventConfigurationCommandInput) {
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
  ): Handler<UpdateResourceEventConfigurationCommandInput, UpdateResourceEventConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceEventConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "UpdateResourceEventConfigurationCommand";
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
    input: UpdateResourceEventConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateResourceEventConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResourceEventConfigurationCommandOutput> {
    return de_UpdateResourceEventConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
