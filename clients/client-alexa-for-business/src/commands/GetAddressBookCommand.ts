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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetAddressBookRequest, GetAddressBookResponse } from "../models/models_0";
import { de_GetAddressBookCommand, se_GetAddressBookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetAddressBookCommand}.
 */
export interface GetAddressBookCommandInput extends GetAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link GetAddressBookCommand}.
 */
export interface GetAddressBookCommandOutput extends GetAddressBookResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets address the book details by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetAddressBookRequest
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new GetAddressBookCommand(input);
 * const response = await client.send(command);
 * // { // GetAddressBookResponse
 * //   AddressBook: { // AddressBook
 * //     AddressBookArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAddressBookCommandInput - {@link GetAddressBookCommandInput}
 * @returns {@link GetAddressBookCommandOutput}
 * @see {@link GetAddressBookCommandInput} for command's `input` shape.
 * @see {@link GetAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetAddressBookCommand extends $Command<
  GetAddressBookCommandInput,
  GetAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: GetAddressBookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAddressBookCommandInput, GetAddressBookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAddressBookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetAddressBookCommand";
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
  private serialize(input: GetAddressBookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAddressBookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAddressBookCommandOutput> {
    return de_GetAddressBookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
