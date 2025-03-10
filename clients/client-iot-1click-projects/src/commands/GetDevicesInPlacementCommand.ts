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
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { GetDevicesInPlacementRequest, GetDevicesInPlacementResponse } from "../models/models_0";
import { de_GetDevicesInPlacementCommand, se_GetDevicesInPlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetDevicesInPlacementCommand}.
 */
export interface GetDevicesInPlacementCommandInput extends GetDevicesInPlacementRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicesInPlacementCommand}.
 */
export interface GetDevicesInPlacementCommandOutput extends GetDevicesInPlacementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns an object enumerating the devices in a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // GetDevicesInPlacementRequest
 *   projectName: "STRING_VALUE", // required
 *   placementName: "STRING_VALUE", // required
 * };
 * const command = new GetDevicesInPlacementCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicesInPlacementResponse
 * //   devices: { // DeviceMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDevicesInPlacementCommandInput - {@link GetDevicesInPlacementCommandInput}
 * @returns {@link GetDevicesInPlacementCommandOutput}
 * @see {@link GetDevicesInPlacementCommandInput} for command's `input` shape.
 * @see {@link GetDevicesInPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 */
export class GetDevicesInPlacementCommand extends $Command<
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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
  constructor(readonly input: GetDevicesInPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicesInPlacementCommandInput, GetDevicesInPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevicesInPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "GetDevicesInPlacementCommand";
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
  private serialize(input: GetDevicesInPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDevicesInPlacementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicesInPlacementCommandOutput> {
    return de_GetDevicesInPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
