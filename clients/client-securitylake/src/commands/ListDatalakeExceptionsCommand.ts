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

import { ListDatalakeExceptionsRequest, ListDatalakeExceptionsResponse } from "../models/models_0";
import { de_ListDatalakeExceptionsCommand, se_ListDatalakeExceptionsCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link ListDatalakeExceptionsCommand}.
 */
export interface ListDatalakeExceptionsCommandInput extends ListDatalakeExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatalakeExceptionsCommand}.
 */
export interface ListDatalakeExceptionsCommandOutput extends ListDatalakeExceptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Amazon Security Lake exceptions that you can use to find the source of problems and
 *          fix them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, ListDatalakeExceptionsCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, ListDatalakeExceptionsCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // ListDatalakeExceptionsRequest
 *   regionSet: [ // RegionSet
 *     "STRING_VALUE",
 *   ],
 *   maxFailures: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDatalakeExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatalakeExceptionsResponse
 * //   nonRetryableFailures: [ // FailuresResponseList // required
 * //     { // FailuresResponse
 * //       region: "STRING_VALUE",
 * //       failures: [ // Failureslist
 * //         { // Failures
 * //           exceptionMessage: "STRING_VALUE", // required
 * //           remediation: "STRING_VALUE", // required
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatalakeExceptionsCommandInput - {@link ListDatalakeExceptionsCommandInput}
 * @returns {@link ListDatalakeExceptionsCommandOutput}
 * @see {@link ListDatalakeExceptionsCommandInput} for command's `input` shape.
 * @see {@link ListDatalakeExceptionsCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class ListDatalakeExceptionsCommand extends $Command<
  ListDatalakeExceptionsCommandInput,
  ListDatalakeExceptionsCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: ListDatalakeExceptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatalakeExceptionsCommandInput, ListDatalakeExceptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatalakeExceptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "ListDatalakeExceptionsCommand";
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
  private serialize(input: ListDatalakeExceptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatalakeExceptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatalakeExceptionsCommandOutput> {
    return de_ListDatalakeExceptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
