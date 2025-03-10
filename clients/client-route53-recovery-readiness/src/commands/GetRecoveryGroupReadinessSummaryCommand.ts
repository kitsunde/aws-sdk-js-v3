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

import { GetRecoveryGroupReadinessSummaryRequest, GetRecoveryGroupReadinessSummaryResponse } from "../models/models_0";
import {
  de_GetRecoveryGroupReadinessSummaryCommand,
  se_GetRecoveryGroupReadinessSummaryCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 *
 * The input for {@link GetRecoveryGroupReadinessSummaryCommand}.
 */
export interface GetRecoveryGroupReadinessSummaryCommandInput extends GetRecoveryGroupReadinessSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryGroupReadinessSummaryCommand}.
 */
export interface GetRecoveryGroupReadinessSummaryCommandOutput
  extends GetRecoveryGroupReadinessSummaryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetRecoveryGroupReadinessSummaryCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetRecoveryGroupReadinessSummaryCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetRecoveryGroupReadinessSummaryRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryGroupReadinessSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryGroupReadinessSummaryResponse
 * //   NextToken: "STRING_VALUE",
 * //   Readiness: "STRING_VALUE",
 * //   ReadinessChecks: [ // __listOfReadinessCheckSummary
 * //     { // ReadinessCheckSummary
 * //       Readiness: "STRING_VALUE",
 * //       ReadinessCheckName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecoveryGroupReadinessSummaryCommandInput - {@link GetRecoveryGroupReadinessSummaryCommandInput}
 * @returns {@link GetRecoveryGroupReadinessSummaryCommandOutput}
 * @see {@link GetRecoveryGroupReadinessSummaryCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryGroupReadinessSummaryCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 */
export class GetRecoveryGroupReadinessSummaryCommand extends $Command<
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
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
  constructor(readonly input: GetRecoveryGroupReadinessSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecoveryGroupReadinessSummaryCommandInput, GetRecoveryGroupReadinessSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecoveryGroupReadinessSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetRecoveryGroupReadinessSummaryCommand";
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
  private serialize(
    input: GetRecoveryGroupReadinessSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRecoveryGroupReadinessSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> {
    return de_GetRecoveryGroupReadinessSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
