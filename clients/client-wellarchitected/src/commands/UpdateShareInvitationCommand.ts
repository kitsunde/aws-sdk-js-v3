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

import { UpdateShareInvitationInput, UpdateShareInvitationOutput } from "../models/models_0";
import { de_UpdateShareInvitationCommand, se_UpdateShareInvitationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 *
 * The input for {@link UpdateShareInvitationCommand}.
 */
export interface UpdateShareInvitationCommandInput extends UpdateShareInvitationInput {}
/**
 * @public
 *
 * The output of {@link UpdateShareInvitationCommand}.
 */
export interface UpdateShareInvitationCommandOutput extends UpdateShareInvitationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update a workload or custom lens share invitation.</p>
 *          <note>
 *             <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateShareInvitationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateShareInvitationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateShareInvitationInput
 *   ShareInvitationId: "STRING_VALUE", // required
 *   ShareInvitationAction: "ACCEPT" || "REJECT", // required
 * };
 * const command = new UpdateShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateShareInvitationOutput
 * //   ShareInvitation: { // ShareInvitation
 * //     ShareInvitationId: "STRING_VALUE",
 * //     ShareResourceType: "WORKLOAD" || "LENS",
 * //     WorkloadId: "STRING_VALUE",
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateShareInvitationCommandInput - {@link UpdateShareInvitationCommandInput}
 * @returns {@link UpdateShareInvitationCommandOutput}
 * @see {@link UpdateShareInvitationCommandInput} for command's `input` shape.
 * @see {@link UpdateShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class UpdateShareInvitationCommand extends $Command<
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: UpdateShareInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateShareInvitationCommandInput, UpdateShareInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateShareInvitationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateShareInvitationCommand";
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
  private serialize(input: UpdateShareInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateShareInvitationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateShareInvitationCommandOutput> {
    return de_UpdateShareInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
