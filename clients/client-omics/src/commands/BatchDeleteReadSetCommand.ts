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

import { BatchDeleteReadSetRequest, BatchDeleteReadSetResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_BatchDeleteReadSetCommand, se_BatchDeleteReadSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchDeleteReadSetCommand}.
 */
export interface BatchDeleteReadSetCommandInput extends BatchDeleteReadSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteReadSetCommand}.
 */
export interface BatchDeleteReadSetCommandOutput extends BatchDeleteReadSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes one or more read sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, BatchDeleteReadSetCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, BatchDeleteReadSetCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // BatchDeleteReadSetRequest
 *   ids: [ // ReadSetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new BatchDeleteReadSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteReadSetResponse
 * //   errors: [ // ReadSetBatchErrorList
 * //     { // ReadSetBatchError
 * //       id: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteReadSetCommandInput - {@link BatchDeleteReadSetCommandInput}
 * @returns {@link BatchDeleteReadSetCommandOutput}
 * @see {@link BatchDeleteReadSetCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteReadSetCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class BatchDeleteReadSetCommand extends $Command<
  BatchDeleteReadSetCommandInput,
  BatchDeleteReadSetCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: BatchDeleteReadSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteReadSetCommandInput, BatchDeleteReadSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteReadSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "BatchDeleteReadSetCommand";
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
  private serialize(input: BatchDeleteReadSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDeleteReadSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteReadSetCommandOutput> {
    return de_BatchDeleteReadSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
