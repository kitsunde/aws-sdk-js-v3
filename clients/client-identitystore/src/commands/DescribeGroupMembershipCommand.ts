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

import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DescribeGroupMembershipRequest, DescribeGroupMembershipResponse } from "../models/models_0";
import { de_DescribeGroupMembershipCommand, se_DescribeGroupMembershipCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandInput extends DescribeGroupMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupMembershipCommand}.
 */
export interface DescribeGroupMembershipCommandOutput extends DescribeGroupMembershipResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeGroupMembershipCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeGroupMembershipCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // DescribeGroupMembershipRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   MembershipId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupMembershipResponse
 * //   IdentityStoreId: "STRING_VALUE", // required
 * //   MembershipId: "STRING_VALUE", // required
 * //   GroupId: "STRING_VALUE", // required
 * //   MemberId: { // MemberId Union: only one key present
 * //     UserId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGroupMembershipCommandInput - {@link DescribeGroupMembershipCommandInput}
 * @returns {@link DescribeGroupMembershipCommandOutput}
 * @see {@link DescribeGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 */
export class DescribeGroupMembershipCommand extends $Command<
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
  IdentitystoreClientResolvedConfig
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
  constructor(readonly input: DescribeGroupMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGroupMembershipCommandInput, DescribeGroupMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGroupMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "DescribeGroupMembershipCommand";
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
  private serialize(input: DescribeGroupMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGroupMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGroupMembershipCommandOutput> {
    return de_DescribeGroupMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
