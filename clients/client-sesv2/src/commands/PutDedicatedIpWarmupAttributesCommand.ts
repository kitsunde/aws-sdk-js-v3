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

import { PutDedicatedIpWarmupAttributesRequest, PutDedicatedIpWarmupAttributesResponse } from "../models/models_0";
import {
  de_PutDedicatedIpWarmupAttributesCommand,
  se_PutDedicatedIpWarmupAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 *
 * The input for {@link PutDedicatedIpWarmupAttributesCommand}.
 */
export interface PutDedicatedIpWarmupAttributesCommandInput extends PutDedicatedIpWarmupAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpWarmupAttributesCommand}.
 */
export interface PutDedicatedIpWarmupAttributesCommandOutput
  extends PutDedicatedIpWarmupAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpWarmupAttributesRequest
 *   Ip: "STRING_VALUE", // required
 *   WarmupPercentage: Number("int"), // required
 * };
 * const command = new PutDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpWarmupAttributesCommandInput - {@link PutDedicatedIpWarmupAttributesCommandInput}
 * @returns {@link PutDedicatedIpWarmupAttributesCommandOutput}
 * @see {@link PutDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class PutDedicatedIpWarmupAttributesCommand extends $Command<
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: PutDedicatedIpWarmupAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDedicatedIpWarmupAttributesCommandInput, PutDedicatedIpWarmupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDedicatedIpWarmupAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutDedicatedIpWarmupAttributesCommand";
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
    input: PutDedicatedIpWarmupAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutDedicatedIpWarmupAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput> {
    return de_PutDedicatedIpWarmupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
