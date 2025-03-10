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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  UpdateBillingGroupInput,
  UpdateBillingGroupInputFilterSensitiveLog,
  UpdateBillingGroupOutput,
  UpdateBillingGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateBillingGroupCommand, se_UpdateBillingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandInput extends UpdateBillingGroupInput {}
/**
 * @public
 *
 * The output of {@link UpdateBillingGroupCommand}.
 */
export interface UpdateBillingGroupCommandOutput extends UpdateBillingGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>This updates an existing billing group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateBillingGroupCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateBillingGroupCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // UpdateBillingGroupInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   ComputationPreference: { // ComputationPreference
 *     PricingPlanArn: "STRING_VALUE", // required
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBillingGroupOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   PrimaryAccountId: "STRING_VALUE",
 * //   PricingPlanArn: "STRING_VALUE",
 * //   Size: Number("long"),
 * //   LastModifiedTime: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   StatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBillingGroupCommandInput - {@link UpdateBillingGroupCommandInput}
 * @returns {@link UpdateBillingGroupCommandOutput}
 * @see {@link UpdateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class UpdateBillingGroupCommand extends $Command<
  UpdateBillingGroupCommandInput,
  UpdateBillingGroupCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: UpdateBillingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBillingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "UpdateBillingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBillingGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBillingGroupOutputFilterSensitiveLog,
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
  private serialize(input: UpdateBillingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBillingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBillingGroupCommandOutput> {
    return de_UpdateBillingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
