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
  ListSipMediaApplicationsRequest,
  ListSipMediaApplicationsResponse,
  ListSipMediaApplicationsResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListSipMediaApplicationsCommand, se_ListSipMediaApplicationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListSipMediaApplicationsCommand}.
 */
export interface ListSipMediaApplicationsCommandInput extends ListSipMediaApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSipMediaApplicationsCommand}.
 */
export interface ListSipMediaApplicationsCommandOutput extends ListSipMediaApplicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the SIP media applications under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipMediaApplicationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSipMediaApplicationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // ListSipMediaApplicationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSipMediaApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSipMediaApplicationsResponse
 * //   SipMediaApplications: [ // SipMediaApplicationList
 * //     { // SipMediaApplication
 * //       SipMediaApplicationId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Endpoints: [ // SipMediaApplicationEndpointList
 * //         { // SipMediaApplicationEndpoint
 * //           LambdaArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSipMediaApplicationsCommandInput - {@link ListSipMediaApplicationsCommandInput}
 * @returns {@link ListSipMediaApplicationsCommandOutput}
 * @see {@link ListSipMediaApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSipMediaApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class ListSipMediaApplicationsCommand extends $Command<
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
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
  constructor(readonly input: ListSipMediaApplicationsCommandInput) {
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
  ): Handler<ListSipMediaApplicationsCommandInput, ListSipMediaApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSipMediaApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListSipMediaApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListSipMediaApplicationsResponseFilterSensitiveLog,
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
  private serialize(input: ListSipMediaApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSipMediaApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSipMediaApplicationsCommandOutput> {
    return de_ListSipMediaApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
