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

import { GetEndpointRequest, GetEndpointResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetEndpointCommand, se_GetEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandInput extends GetEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandOutput extends GetEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the settings and attributes of a specific endpoint for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetEndpointRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointResponse
 * //   EndpointResponse: { // EndpointResponse
 * //     Address: "STRING_VALUE",
 * //     ApplicationId: "STRING_VALUE",
 * //     Attributes: { // MapOfListOf__string
 * //       "<keys>": [ // ListOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //     CohortId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Demographic: { // EndpointDemographic
 * //       AppVersion: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       Make: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //     },
 * //     EffectiveDate: "STRING_VALUE",
 * //     EndpointStatus: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Location: { // EndpointLocation
 * //       City: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       Latitude: Number("double"),
 * //       Longitude: Number("double"),
 * //       PostalCode: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Metrics: { // MapOf__double
 * //       "<keys>": Number("double"),
 * //     },
 * //     OptOut: "STRING_VALUE",
 * //     RequestId: "STRING_VALUE",
 * //     User: { // EndpointUser
 * //       UserAttributes: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEndpointCommandInput - {@link GetEndpointCommandInput}
 * @returns {@link GetEndpointCommandOutput}
 * @see {@link GetEndpointCommandInput} for command's `input` shape.
 * @see {@link GetEndpointCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class GetEndpointCommand extends $Command<
  GetEndpointCommandInput,
  GetEndpointCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEndpointCommandInput, GetEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEndpointCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetEndpointCommand";
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
  private serialize(input: GetEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEndpointCommandOutput> {
    return de_GetEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
