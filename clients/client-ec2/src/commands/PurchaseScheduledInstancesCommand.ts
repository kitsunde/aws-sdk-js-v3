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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/models_6";
import { de_PurchaseScheduledInstancesCommand, se_PurchaseScheduledInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link PurchaseScheduledInstancesCommand}.
 */
export interface PurchaseScheduledInstancesCommandInput extends PurchaseScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseScheduledInstancesCommand}.
 */
export interface PurchaseScheduledInstancesCommandOutput extends PurchaseScheduledInstancesResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>You can no longer purchase Scheduled Instances.</p>
 *          </note>
 *          <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // PurchaseScheduledInstancesRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   PurchaseRequests: [ // PurchaseRequestSet // required
 *     { // PurchaseRequest
 *       InstanceCount: Number("int"), // required
 *       PurchaseToken: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseScheduledInstancesResult
 * //   ScheduledInstanceSet: [ // PurchasedScheduledInstanceSet
 * //     { // ScheduledInstance
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       InstanceType: "STRING_VALUE",
 * //       NetworkPlatform: "STRING_VALUE",
 * //       NextSlotStartTime: new Date("TIMESTAMP"),
 * //       Platform: "STRING_VALUE",
 * //       PreviousSlotEndTime: new Date("TIMESTAMP"),
 * //       Recurrence: { // ScheduledInstanceRecurrence
 * //         Frequency: "STRING_VALUE",
 * //         Interval: Number("int"),
 * //         OccurrenceDaySet: [ // OccurrenceDaySet
 * //           Number("int"),
 * //         ],
 * //         OccurrenceRelativeToEnd: true || false,
 * //         OccurrenceUnit: "STRING_VALUE",
 * //       },
 * //       ScheduledInstanceId: "STRING_VALUE",
 * //       SlotDurationInHours: Number("int"),
 * //       TermEndDate: new Date("TIMESTAMP"),
 * //       TermStartDate: new Date("TIMESTAMP"),
 * //       TotalScheduledInstanceHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PurchaseScheduledInstancesCommandInput - {@link PurchaseScheduledInstancesCommandInput}
 * @returns {@link PurchaseScheduledInstancesCommandOutput}
 * @see {@link PurchaseScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link PurchaseScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To purchase a Scheduled Instance
 * ```javascript
 * // This example purchases a Scheduled Instance.
 * const input = {
 *   "PurchaseRequests": [
 *     {
 *       "InstanceCount": 1,
 *       "PurchaseToken": "eyJ2IjoiMSIsInMiOjEsImMiOi..."
 *     }
 *   ]
 * };
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScheduledInstanceSet": [
 *     {
 *       "AvailabilityZone": "us-west-2b",
 *       "CreateDate": "2016-01-25T21:43:38.612Z",
 *       "HourlyPrice": "0.095",
 *       "InstanceCount": 1,
 *       "InstanceType": "c4.large",
 *       "NetworkPlatform": "EC2-VPC",
 *       "NextSlotStartTime": "2016-01-31T09:00:00Z",
 *       "Platform": "Linux/UNIX",
 *       "Recurrence": {
 *         "Frequency": "Weekly",
 *         "Interval": 1,
 *         "OccurrenceDaySet": [
 *           1
 *         ],
 *         "OccurrenceRelativeToEnd": false,
 *         "OccurrenceUnit": ""
 *       },
 *       "ScheduledInstanceId": "sci-1234-1234-1234-1234-123456789012",
 *       "SlotDurationInHours": 32,
 *       "TermEndDate": "2017-01-31T09:00:00Z",
 *       "TermStartDate": "2016-01-31T09:00:00Z",
 *       "TotalScheduledInstanceHours": 1696
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-purchase-scheduled-instances-1
 * ```
 *
 */
export class PurchaseScheduledInstancesCommand extends $Command<
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: PurchaseScheduledInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseScheduledInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseScheduledInstancesCommand";
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
  private serialize(input: PurchaseScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PurchaseScheduledInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseScheduledInstancesCommandOutput> {
    return de_PurchaseScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
