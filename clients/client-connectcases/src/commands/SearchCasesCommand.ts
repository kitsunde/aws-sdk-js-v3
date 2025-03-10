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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { SearchCasesRequest, SearchCasesResponse } from "../models/models_0";
import { de_SearchCasesCommand, se_SearchCasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SearchCasesCommand}.
 */
export interface SearchCasesCommandInput extends SearchCasesRequest {}
/**
 * @public
 *
 * The output of {@link SearchCasesCommand}.
 */
export interface SearchCasesCommandOutput extends SearchCasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for cases within their associated Cases domain. Search results are returned
 *       as a paginated list of abridged case documents.</p>
 *          <note>
 *             <p>For <code>customer_id</code> you must provide the full customer profile ARN in this
 *         format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain
 *           name/profiles/profile ID</code>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchCasesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchCasesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // SearchCasesRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchTerm: "STRING_VALUE",
 *   filter: { // CaseFilter Union: only one key present
 *     field: { // FieldFilter Union: only one key present
 *       equalTo: { // FieldValue
 *         id: "STRING_VALUE", // required
 *         value: { // FieldValueUnion Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *       contains: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *       greaterThan: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *       greaterThanOrEqualTo: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *       lessThan: {
 *         id: "STRING_VALUE", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *       lessThanOrEqualTo: "<FieldValue>",
 *     },
 *     not: {//  Union: only one key present
 *       field: {//  Union: only one key present
 *         equalTo: "<FieldValue>",
 *         contains: "<FieldValue>",
 *         greaterThan: "<FieldValue>",
 *         greaterThanOrEqualTo: "<FieldValue>",
 *         lessThan: "<FieldValue>",
 *         lessThanOrEqualTo: "<FieldValue>",
 *       },
 *       not: "<CaseFilter>",
 *       andAll: [ // CaseFilterList
 *         "<CaseFilter>",
 *       ],
 *     },
 *     andAll: [
 *       "<CaseFilter>",
 *     ],
 *   },
 *   sorts: [ // SortList
 *     { // Sort
 *       fieldId: "STRING_VALUE", // required
 *       sortOrder: "STRING_VALUE", // required
 *     },
 *   ],
 *   fields: [ // FieldIdentifierList
 *     { // FieldIdentifier
 *       id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchCasesCommand(input);
 * const response = await client.send(command);
 * // { // SearchCasesResponse
 * //   nextToken: "STRING_VALUE",
 * //   cases: [ // SearchCasesResponseItemList // required
 * //     { // SearchCasesResponseItem
 * //       caseId: "STRING_VALUE", // required
 * //       templateId: "STRING_VALUE", // required
 * //       fields: [ // FieldValueList // required
 * //         { // FieldValue
 * //           id: "STRING_VALUE", // required
 * //           value: { // FieldValueUnion Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             doubleValue: Number("double"),
 * //             booleanValue: true || false,
 * //           },
 * //         },
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchCasesCommandInput - {@link SearchCasesCommandInput}
 * @returns {@link SearchCasesCommandOutput}
 * @see {@link SearchCasesCommandInput} for command's `input` shape.
 * @see {@link SearchCasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class SearchCasesCommand extends $Command<
  SearchCasesCommandInput,
  SearchCasesCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: SearchCasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchCasesCommandInput, SearchCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchCasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "SearchCasesCommand";
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
  private serialize(input: SearchCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchCasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchCasesCommandOutput> {
    return de_SearchCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
