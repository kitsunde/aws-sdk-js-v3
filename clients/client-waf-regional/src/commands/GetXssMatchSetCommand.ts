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

import { GetXssMatchSetRequest, GetXssMatchSetResponse } from "../models/models_0";
import { de_GetXssMatchSetCommand, se_GetXssMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 *
 * The input for {@link GetXssMatchSetCommand}.
 */
export interface GetXssMatchSetCommandInput extends GetXssMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetXssMatchSetCommand}.
 */
export interface GetXssMatchSetCommandOutput extends GetXssMatchSetResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetXssMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetXssMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetXssMatchSetRequest
 *   XssMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetXssMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetXssMatchSetResponse
 * //   XssMatchSet: { // XssMatchSet
 * //     XssMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     XssMatchTuples: [ // XssMatchTuples // required
 * //       { // XssMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "STRING_VALUE", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetXssMatchSetCommandInput - {@link GetXssMatchSetCommandInput}
 * @returns {@link GetXssMatchSetCommandOutput}
 * @see {@link GetXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To get an XSS match set
 * ```javascript
 * // The following example returns the details of an XSS match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetXssMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "XssMatchSet": {
 *     "Name": "MySampleXssMatchSet",
 *     "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     "XssMatchTuples": [
 *       {
 *         "FieldToMatch": {
 *           "Type": "QUERY_STRING"
 *         },
 *         "TextTransformation": "URL_DECODE"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: getxssmatchset-1475187879017
 * ```
 *
 */
export class GetXssMatchSetCommand extends $Command<
  GetXssMatchSetCommandInput,
  GetXssMatchSetCommandOutput,
  WAFRegionalClientResolvedConfig
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
  constructor(readonly input: GetXssMatchSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetXssMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetXssMatchSetCommand";
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
  private serialize(input: GetXssMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetXssMatchSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetXssMatchSetCommandOutput> {
    return de_GetXssMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
