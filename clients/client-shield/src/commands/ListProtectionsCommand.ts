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

import { ListProtectionsRequest, ListProtectionsResponse } from "../models/models_0";
import { de_ListProtectionsCommand, se_ListProtectionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 *
 * The input for {@link ListProtectionsCommand}.
 */
export interface ListProtectionsCommandInput extends ListProtectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectionsCommand}.
 */
export interface ListProtectionsCommandOutput extends ListProtectionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide
 *        filtering criteria and retrieve just the subset of protections that match the criteria. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // ListProtectionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InclusionFilters: { // InclusionProtectionFilters
 *     ResourceArns: [ // ResourceArnFilters
 *       "STRING_VALUE",
 *     ],
 *     ProtectionNames: [ // ProtectionNameFilters
 *       "STRING_VALUE",
 *     ],
 *     ResourceTypes: [ // ProtectedResourceTypeFilters
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListProtectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectionsResponse
 * //   Protections: [ // Protections
 * //     { // Protection
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       HealthCheckIds: [ // HealthCheckIds
 * //         "STRING_VALUE",
 * //       ],
 * //       ProtectionArn: "STRING_VALUE",
 * //       ApplicationLayerAutomaticResponseConfiguration: { // ApplicationLayerAutomaticResponseConfiguration
 * //         Status: "STRING_VALUE", // required
 * //         Action: { // ResponseAction
 * //           Block: {},
 * //           Count: {},
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectionsCommandInput - {@link ListProtectionsCommandInput}
 * @returns {@link ListProtectionsCommandOutput}
 * @see {@link ListProtectionsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class ListProtectionsCommand extends $Command<
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: ListProtectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectionsCommandInput, ListProtectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProtectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListProtectionsCommand";
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
  private serialize(input: ListProtectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProtectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtectionsCommandOutput> {
    return de_ListProtectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
