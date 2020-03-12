import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {  ScrollPanel } from 'primeng/scrollpanel';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit, AfterViewInit {

    @Input() reset: boolean;

    model: any[];

    @ViewChild('layoutMenuScroller', { static: true }) layoutMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/'] },
            {
                label: 'Menu Colors', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    { label: 'Light', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = true },
                    { label: 'Dark', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = false }
                ]
            },
            {
                label: 'Layouts', icon: 'fa fa-fw fa-cog', badge: 5,
                items: [
                    { label: 'Slim', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'slim' },
                    { label: 'Static', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'static' },
                    { label: 'Overlay', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'overlay' },
                    { label: 'Horizontal', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'horizontal' },
                    { label: 'Toggle', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'toggle' }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: 16,
                items: [
                    {
                        label: 'Teal - Yellow', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('teal-yellow', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('teal-yellow', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('teal-yellow', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Blue - Orange', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-orange', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-orange', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-orange', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Pink - Teal', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-teal', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-teal', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-teal', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Indigo - Purple', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-purple', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-purple', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-purple', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Indigo - Yellow', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-yellow', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-yellow', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo-yellow', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Cyan - Deep Orange', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan-deeporange', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan-deeporange', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan-deeporange', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Green - Pink', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-pink', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-pink', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-pink', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Green - Orange', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-orange', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-orange', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-orange', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Green - Purple', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-purple', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-purple', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green-purple', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Orange - Cyan', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-cyan', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-cyan', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-cyan', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Blue - Grey', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-grey', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-grey', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue-grey', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Deep Purple - Teal', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeppurple-teal', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeppurple-teal', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeppurple-teal', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Pink - Cyan', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-cyan', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-cyan', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink-cyan', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Orange - Indigo', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-indigo', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-indigo', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('orange-indigo', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Dark Pink - Cyan', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('darkpink-cyan', null)
                            },
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('darkpink-cyan', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('darkpink-cyan', 'dark')
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-bars',
                items: [
                    { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample'] },
                    { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms'] },
                    { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data'] },
                    { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels'] },
                    { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays'] },
                    { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus'] },
                    { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages'] },
                    { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts'] },
                    { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file'] },
                    { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc'] }
                ]
            },
            {
                label: 'Pages', icon: 'fa fa-fw fa-cube',
                items: [
                    { label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty'] },
                    { label: 'Landing Page', icon: 'fa fa-fw fa-globe', url: 'assets/pages/landing.html', target: '_blank' },
                    { label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
                    { label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
                    { label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
                    {
                        label: 'Access Denied', icon: 'fa fa-fw fa-exclamation-triangle',
                        url: 'assets/pages/access.html', target: '_blank'
                    }
                ]
            },
            {
                label: 'Hierarchy', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Documentation', icon: 'fa fa-fw fa-file-code-o', routerLink: ['/documentation']
            },
            {
                label: 'Buy Now', icon: 'fa fa-fw fa-credit-card-alt', url: ['https://www.primefaces.org/store']
            }
        ];
    }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    changeTheme(theme: string, mode: string) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        themeLink.href = 'assets/theme/theme-' + (mode ? theme + '-' + mode : theme) + '.css';
    }

    onMenuClick(event) {
        if (!this.app.isHorizontal()) {
            setTimeout(() => {
                this.layoutMenuScrollerViewChild.moveBar();
            }, 450);
        }

        this.app.onMenuClick(event);
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   *ngIf="!child.routerLink" [ngClass]="child.styleClass"
                   [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i>
                    <span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" *ngIf="child.routerLink"
                   [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i>
                    <span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isHorizontal())&&root ? isActive(i) ?
                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _parentActive: boolean;

    _reset: boolean;

    activeIndex: number;

    constructor(public app: AppComponent, public appMenu: AppMenuComponent) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.appMenu.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal())) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
