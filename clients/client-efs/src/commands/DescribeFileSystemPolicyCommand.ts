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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeFileSystemPolicyRequest, FileSystemPolicyDescription } from "../models/models_0";
import { de_DescribeFileSystemPolicyCommand, se_DescribeFileSystemPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeFileSystemPolicyCommand}.
 */
export interface DescribeFileSystemPolicyCommandInput extends DescribeFileSystemPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemPolicyCommand}.
 */
export interface DescribeFileSystemPolicyCommandOutput extends FileSystemPolicyDescription, __MetadataBearer {}

/**
 * @public
 * <p>Returns the <code>FileSystemPolicy</code> for the specified EFS file system.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeFileSystemPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemPolicyDescription
 * //   FileSystemId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemPolicyCommandInput - {@link DescribeFileSystemPolicyCommandInput}
 * @returns {@link DescribeFileSystemPolicyCommandOutput}
 * @see {@link DescribeFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link PolicyNotFound} (client fault)
 *  <p>Returned if the default file system policy is in effect for the EFS file system specified.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class DescribeFileSystemPolicyCommand extends $Command<
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: DescribeFileSystemPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFileSystemPolicyCommandInput, DescribeFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFileSystemPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeFileSystemPolicyCommand";
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
  private serialize(input: DescribeFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFileSystemPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFileSystemPolicyCommandOutput> {
    return de_DescribeFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
