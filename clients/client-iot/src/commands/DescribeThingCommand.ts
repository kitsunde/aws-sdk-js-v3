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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingRequest, DescribeThingResponse } from "../models/models_1";
import { de_DescribeThingCommand, se_DescribeThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeThingCommand}.
 */
export interface DescribeThingCommandInput extends DescribeThingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingCommand}.
 */
export interface DescribeThingCommandOutput extends DescribeThingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeThingRequest
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingResponse
 * //   defaultClientId: "STRING_VALUE",
 * //   thingName: "STRING_VALUE",
 * //   thingId: "STRING_VALUE",
 * //   thingArn: "STRING_VALUE",
 * //   thingTypeName: "STRING_VALUE",
 * //   attributes: { // Attributes
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   version: Number("long"),
 * //   billingGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeThingCommandInput - {@link DescribeThingCommandInput}
 * @returns {@link DescribeThingCommandOutput}
 * @see {@link DescribeThingCommandInput} for command's `input` shape.
 * @see {@link DescribeThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeThingCommand extends $Command<
  DescribeThingCommandInput,
  DescribeThingCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeThingCommandInput, DescribeThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeThingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeThingCommand";
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
  private serialize(input: DescribeThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeThingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeThingCommandOutput> {
    return de_DescribeThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
