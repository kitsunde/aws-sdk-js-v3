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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListProxySessionsRequest,
  ListProxySessionsResponse,
  ListProxySessionsResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListProxySessionsCommand, se_ListProxySessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListProxySessionsCommand}.
 */
export interface ListProxySessionsCommandInput extends ListProxySessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProxySessionsCommand}.
 */
export interface ListProxySessionsCommandOutput extends ListProxySessionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the proxy sessions for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListProxySessionsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListProxySessionsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListProxySessionsRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Status: "Open" || "InProgress" || "Closed",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProxySessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProxySessionsResponse
 * //   ProxySessions: [ // ProxySessions
 * //     { // ProxySession
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       ProxySessionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "Open" || "InProgress" || "Closed",
 * //       ExpiryMinutes: Number("int"),
 * //       Capabilities: [ // CapabilityList
 * //         "Voice" || "SMS",
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       EndedTimestamp: new Date("TIMESTAMP"),
 * //       Participants: [ // Participants
 * //         { // Participant
 * //           PhoneNumber: "STRING_VALUE",
 * //           ProxyPhoneNumber: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 * //       GeoMatchLevel: "Country" || "AreaCode",
 * //       GeoMatchParams: { // GeoMatchParams
 * //         Country: "STRING_VALUE", // required
 * //         AreaCode: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxySessionsCommandInput - {@link ListProxySessionsCommandInput}
 * @returns {@link ListProxySessionsCommandOutput}
 * @see {@link ListProxySessionsCommandInput} for command's `input` shape.
 * @see {@link ListProxySessionsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class ListProxySessionsCommand extends $Command<
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: ListProxySessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProxySessionsCommandInput, ListProxySessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProxySessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListProxySessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListProxySessionsResponseFilterSensitiveLog,
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
  private serialize(input: ListProxySessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProxySessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProxySessionsCommandOutput> {
    return de_ListProxySessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
