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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DisassociateVehicleFleetRequest, DisassociateVehicleFleetResponse } from "../models/models_0";
import { de_DisassociateVehicleFleetCommand, se_DisassociateVehicleFleetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DisassociateVehicleFleetCommand}.
 */
export interface DisassociateVehicleFleetCommandInput extends DisassociateVehicleFleetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVehicleFleetCommand}.
 */
export interface DisassociateVehicleFleetCommandOutput extends DisassociateVehicleFleetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes, or disassociates, a vehicle from a fleet. Disassociating a vehicle from a
 *             fleet doesn't delete the vehicle.</p>
 *         <note>
 *             <p>If the vehicle is successfully dissociated from a fleet, Amazon Web Services IoT FleetWise sends back an
 *                 HTTP 200 response with an empty body.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DisassociateVehicleFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DisassociateVehicleFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DisassociateVehicleFleetRequest
 *   vehicleName: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateVehicleFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateVehicleFleetCommandInput - {@link DisassociateVehicleFleetCommandInput}
 * @returns {@link DisassociateVehicleFleetCommandOutput}
 * @see {@link DisassociateVehicleFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateVehicleFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class DisassociateVehicleFleetCommand extends $Command<
  DisassociateVehicleFleetCommandInput,
  DisassociateVehicleFleetCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: DisassociateVehicleFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateVehicleFleetCommandInput, DisassociateVehicleFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateVehicleFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "DisassociateVehicleFleetCommand";
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
  private serialize(input: DisassociateVehicleFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateVehicleFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateVehicleFleetCommandOutput> {
    return de_DisassociateVehicleFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
