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

import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { UpdateQueueRequest, UpdateQueueResponse } from "../models/models_2";
import { de_UpdateQueueCommand, se_UpdateQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandInput extends UpdateQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandOutput extends UpdateQueueResponse, __MetadataBearer {}

/**
 * @public
 * Modify one of your existing queues.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, UpdateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // UpdateQueueRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   ReservationPlanSettings: { // ReservationPlanSettings
 *     Commitment: "ONE_YEAR", // required
 *     RenewalType: "AUTO_RENEW" || "EXPIRE", // required
 *     ReservedSlots: Number("int"), // required
 *   },
 *   Status: "ACTIVE" || "PAUSED",
 * };
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQueueResponse
 * //   Queue: { // Queue
 * //     Arn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE", // required
 * //     PricingPlan: "ON_DEMAND" || "RESERVED",
 * //     ProgressingJobsCount: Number("int"),
 * //     ReservationPlan: { // ReservationPlan
 * //       Commitment: "ONE_YEAR",
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       PurchasedAt: new Date("TIMESTAMP"),
 * //       RenewalType: "AUTO_RENEW" || "EXPIRE",
 * //       ReservedSlots: Number("int"),
 * //       Status: "ACTIVE" || "EXPIRED",
 * //     },
 * //     Status: "ACTIVE" || "PAUSED",
 * //     SubmittedJobsCount: Number("int"),
 * //     Type: "SYSTEM" || "CUSTOM",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQueueCommandInput - {@link UpdateQueueCommandInput}
 * @returns {@link UpdateQueueCommandOutput}
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 */
export class UpdateQueueCommand extends $Command<
  UpdateQueueCommandInput,
  UpdateQueueCommandOutput,
  MediaConvertClientResolvedConfig
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
  constructor(readonly input: UpdateQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateQueueCommandInput, UpdateQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateQueueCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "UpdateQueueCommand";
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
  private serialize(input: UpdateQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateQueueCommandOutput> {
    return de_UpdateQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
