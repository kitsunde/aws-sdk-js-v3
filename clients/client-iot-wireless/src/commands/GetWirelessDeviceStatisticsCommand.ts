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
import { GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse } from "../models/models_0";
import {
  de_GetWirelessDeviceStatisticsCommand,
  se_GetWirelessDeviceStatisticsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetWirelessDeviceStatisticsCommand}.
 */
export interface GetWirelessDeviceStatisticsCommandInput extends GetWirelessDeviceStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessDeviceStatisticsCommand}.
 */
export interface GetWirelessDeviceStatisticsCommandOutput
  extends GetWirelessDeviceStatisticsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets operating information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessDeviceStatisticsRequest
 *   WirelessDeviceId: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessDeviceStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessDeviceStatisticsResponse
 * //   WirelessDeviceId: "STRING_VALUE",
 * //   LastUplinkReceivedAt: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANDeviceMetadata
 * //     DevEui: "STRING_VALUE",
 * //     FPort: Number("int"),
 * //     DataRate: Number("int"),
 * //     Frequency: Number("int"),
 * //     Timestamp: "STRING_VALUE",
 * //     Gateways: [ // LoRaWANGatewayMetadataList
 * //       { // LoRaWANGatewayMetadata
 * //         GatewayEui: "STRING_VALUE",
 * //         Snr: Number("double"),
 * //         Rssi: Number("double"),
 * //       },
 * //     ],
 * //   },
 * //   Sidewalk: { // SidewalkDeviceMetadata
 * //     Rssi: Number("int"),
 * //     BatteryLevel: "normal" || "low" || "critical",
 * //     Event: "discovered" || "lost" || "ack" || "nack" || "passthrough",
 * //     DeviceState: "Provisioned" || "RegisteredNotSeen" || "RegisteredReachable" || "RegisteredUnreachable",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWirelessDeviceStatisticsCommandInput - {@link GetWirelessDeviceStatisticsCommandInput}
 * @returns {@link GetWirelessDeviceStatisticsCommandOutput}
 * @see {@link GetWirelessDeviceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceStatisticsCommandOutput} for command's `response` shape.
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
export class GetWirelessDeviceStatisticsCommand extends $Command<
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
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
  constructor(readonly input: GetWirelessDeviceStatisticsCommandInput) {
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
  ): Handler<GetWirelessDeviceStatisticsCommandInput, GetWirelessDeviceStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessDeviceStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessDeviceStatisticsCommand";
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
  private serialize(input: GetWirelessDeviceStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWirelessDeviceStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessDeviceStatisticsCommandOutput> {
    return de_GetWirelessDeviceStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
