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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/models_0";
import { de_BatchGetNamedQueryCommand, se_BatchGetNamedQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link BatchGetNamedQueryCommand}.
 */
export interface BatchGetNamedQueryCommandInput extends BatchGetNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link BatchGetNamedQueryCommand}.
 */
export interface BatchGetNamedQueryCommandOutput extends BatchGetNamedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of a single named query or a list of up to 50 queries, which you
 *             provide as an array of query ID strings. Requires you to have access to the workgroup in
 *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
 *             list of named query IDs in the specified workgroup. If information could not be
 *             retrieved for a submitted query ID, information about the query ID submitted is listed
 *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
 *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
 *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
 *             query execution IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // BatchGetNamedQueryInput
 *   NamedQueryIds: [ // NamedQueryIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetNamedQueryCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetNamedQueryOutput
 * //   NamedQueries: [ // NamedQueryList
 * //     { // NamedQuery
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Database: "STRING_VALUE", // required
 * //       QueryString: "STRING_VALUE", // required
 * //       NamedQueryId: "STRING_VALUE",
 * //       WorkGroup: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedNamedQueryIds: [ // UnprocessedNamedQueryIdList
 * //     { // UnprocessedNamedQueryId
 * //       NamedQueryId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetNamedQueryCommandInput - {@link BatchGetNamedQueryCommandInput}
 * @returns {@link BatchGetNamedQueryCommandOutput}
 * @see {@link BatchGetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link BatchGetNamedQueryCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class BatchGetNamedQueryCommand extends $Command<
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: BatchGetNamedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetNamedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetNamedQueryCommand";
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
  private serialize(input: BatchGetNamedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetNamedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetNamedQueryCommandOutput> {
    return de_BatchGetNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
