/*!
 * Copyright (C) 2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */

/**
 * Generated using theia-extension-generator
 */
import { CoffeeWelcomePageContribution } from './coffee-welcome-page-contribution';
import { ContainerModule } from 'inversify';
import { WelcomePageWidget } from './welcome-page-widget';
import { WidgetFactory, FrontendApplicationContribution, bindViewContribution } from '@theia/core/lib/browser';
import { CommandContribution, MenuContribution } from '@theia/core';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, CoffeeWelcomePageContribution);
    bind(CommandContribution).toService(CoffeeWelcomePageContribution);
    bind(MenuContribution).toService(CoffeeWelcomePageContribution);
    bind(FrontendApplicationContribution).toService(CoffeeWelcomePageContribution);
    bind(WelcomePageWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: WelcomePageWidget.ID,
        createWidget: () => context.container.get<WelcomePageWidget>(WelcomePageWidget),
    })).inSingletonScope();
});
