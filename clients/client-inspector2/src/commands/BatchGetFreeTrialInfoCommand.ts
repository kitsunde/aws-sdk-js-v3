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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetFreeTrialInfoRequest, BatchGetFreeTrialInfoResponse } from "../models/models_0";
import { de_BatchGetFreeTrialInfoCommand, se_BatchGetFreeTrialInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandInput extends BatchGetFreeTrialInfoRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandOutput extends BatchGetFreeTrialInfoResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets free trial status for multiple Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFreeTrialInfoCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFreeTrialInfoCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetFreeTrialInfoRequest
 *   accountIds: [ // MeteringAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFreeTrialInfoCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFreeTrialInfoResponse
 * //   accounts: [ // FreeTrialAccountInfoList // required
 * //     { // FreeTrialAccountInfo
 * //       accountId: "STRING_VALUE", // required
 * //       freeTrialInfo: [ // FreeTrialInfoList // required
 * //         { // FreeTrialInfo
 * //           type: "STRING_VALUE", // required
 * //           start: new Date("TIMESTAMP"), // required
 * //           end: new Date("TIMESTAMP"), // required
 * //           status: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failedAccounts: [ // FreeTrialInfoErrorList // required
 * //     { // FreeTrialInfoError
 * //       accountId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFreeTrialInfoCommandInput - {@link BatchGetFreeTrialInfoCommandInput}
 * @returns {@link BatchGetFreeTrialInfoCommandOutput}
 * @see {@link BatchGetFreeTrialInfoCommandInput} for command's `input` shape.
 * @see {@link BatchGetFreeTrialInfoCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class BatchGetFreeTrialInfoCommand extends $Command<
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: BatchGetFreeTrialInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFreeTrialInfoCommandInput, BatchGetFreeTrialInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetFreeTrialInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetFreeTrialInfoCommand";
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
  private serialize(input: BatchGetFreeTrialInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetFreeTrialInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFreeTrialInfoCommandOutput> {
    return de_BatchGetFreeTrialInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
