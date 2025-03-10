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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteClusterPolicyRequest, DeleteClusterPolicyResponse } from "../models/models_0";
import { de_DeleteClusterPolicyCommand, se_DeleteClusterPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandInput extends DeleteClusterPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandOutput extends DeleteClusterPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteClusterPolicyCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteClusterPolicyCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DeleteClusterPolicyRequest
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterPolicyCommandInput - {@link DeleteClusterPolicyCommandInput}
 * @returns {@link DeleteClusterPolicyCommandOutput}
 * @see {@link DeleteClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterPolicyCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DeleteClusterPolicyCommand extends $Command<
  DeleteClusterPolicyCommandInput,
  DeleteClusterPolicyCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: DeleteClusterPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterPolicyCommandInput, DeleteClusterPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClusterPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DeleteClusterPolicyCommand";
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
  private serialize(input: DeleteClusterPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClusterPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterPolicyCommandOutput> {
    return de_DeleteClusterPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
