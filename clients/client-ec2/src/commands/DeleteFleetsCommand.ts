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
import { DeleteFleetsRequest, DeleteFleetsResult } from "../models/models_2";
import { de_DeleteFleetsCommand, se_DeleteFleetsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteFleetsCommand}.
 */
export interface DeleteFleetsCommandInput extends DeleteFleetsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetsCommand}.
 */
export interface DeleteFleetsCommandOutput extends DeleteFleetsResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified EC2 Fleets.</p>
 *          <p>After you delete an EC2 Fleet, it launches no new instances.</p>
 *          <p>You must also specify whether a deleted EC2 Fleet should terminate its instances. If you
 *          choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code>
 *          state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances
 *          continue to run until they are interrupted or you terminate them manually.</p>
 *          <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is
 *          deleted. A deleted <code>instant</code> fleet with running instances is not
 *          supported.</p>
 *          <p class="title">
 *             <b>Restrictions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this
 *                number, no <code>instant</code> fleets are deleted and an error is returned. There is no
 *                restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted
 *                in a single request.</p>
 *             </li>
 *             <li>
 *                <p>Up to 1000 instances can be terminated in a single request to delete
 *                <code>instant</code> fleets.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Delete an EC2
 *          Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteFleetsRequest
 *   DryRun: true || false,
 *   FleetIds: [ // FleetIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   TerminateInstances: true || false, // required
 * };
 * const command = new DeleteFleetsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetsResult
 * //   SuccessfulFleetDeletions: [ // DeleteFleetSuccessSet
 * //     { // DeleteFleetSuccessItem
 * //       CurrentFleetState: "submitted" || "active" || "deleted" || "failed" || "deleted_running" || "deleted_terminating" || "modifying",
 * //       PreviousFleetState: "submitted" || "active" || "deleted" || "failed" || "deleted_running" || "deleted_terminating" || "modifying",
 * //       FleetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulFleetDeletions: [ // DeleteFleetErrorSet
 * //     { // DeleteFleetErrorItem
 * //       Error: { // DeleteFleetError
 * //         Code: "fleetIdDoesNotExist" || "fleetIdMalformed" || "fleetNotInDeletableState" || "unexpectedError",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       FleetId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFleetsCommandInput - {@link DeleteFleetsCommandInput}
 * @returns {@link DeleteFleetsCommandOutput}
 * @see {@link DeleteFleetsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteFleetsCommand extends $Command<
  DeleteFleetsCommandInput,
  DeleteFleetsCommandOutput,
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
  constructor(readonly input: DeleteFleetsCommandInput) {
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
  ): Handler<DeleteFleetsCommandInput, DeleteFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteFleetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteFleetsCommand";
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
  private serialize(input: DeleteFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFleetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetsCommandOutput> {
    return de_DeleteFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
