.class public final Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1;
.super Ljava/lang/Object;
.source "DevMenuPackage.kt"

# interfaces
.implements Lexpo/modules/core/interfaces/ReactActivityHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lexpo/modules/devmenu/DevMenuPackage;->createReactActivityHandlers(Landroid/content/Context;)Ljava/util/List;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nDevMenuPackage.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DevMenuPackage.kt\nexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1\n+ 2 ActivityViewModelLazy.kt\nandroidx/activity/ActivityViewModelLazyKt\n*L\n1#1,90:1\n75#2,13:91\n*S KotlinDebug\n*F\n+ 1 DevMenuPackage.kt\nexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1\n*L\n68#1:91,13\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000)\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0008\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\u0008\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016J\u0018\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0008\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016\u00a8\u0006\u000c"
    }
    d2 = {
        "expo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1",
        "Lexpo/modules/core/interfaces/ReactActivityHandler;",
        "createReactRootViewContainer",
        "Landroid/view/ViewGroup;",
        "activity",
        "Landroid/app/Activity;",
        "onKeyUp",
        "",
        "keyCode",
        "",
        "event",
        "Landroid/view/KeyEvent;",
        "expo-dev-menu_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 65
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public createReactRootViewContainer(Landroid/app/Activity;)Landroid/view/ViewGroup;
    .locals 9

    const-string v0, "activity"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 67
    new-instance v0, Landroid/widget/FrameLayout;

    move-object v1, p1

    check-cast v1, Landroid/content/Context;

    invoke-direct {v0, v1}, Landroid/widget/FrameLayout;-><init>(Landroid/content/Context;)V

    .line 68
    new-instance v2, Lexpo/modules/devmenu/compose/BindingView;

    check-cast p1, Landroidx/appcompat/app/AppCompatActivity;

    check-cast p1, Landroidx/activity/ComponentActivity;

    .line 95
    new-instance v3, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$1;

    invoke-direct {v3, p1}, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$1;-><init>(Landroidx/activity/ComponentActivity;)V

    check-cast v3, Lkotlin/jvm/functions/Function0;

    .line 99
    new-instance v4, Landroidx/lifecycle/ViewModelLazy;

    const-class v5, Lexpo/modules/devmenu/compose/DevMenuViewModel;

    invoke-static {v5}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v5

    .line 101
    new-instance v6, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$2;

    invoke-direct {v6, p1}, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$2;-><init>(Landroidx/activity/ComponentActivity;)V

    check-cast v6, Lkotlin/jvm/functions/Function0;

    .line 103
    new-instance v7, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$3;

    const/4 v8, 0x0

    invoke-direct {v7, v8, p1}, Lexpo/modules/devmenu/DevMenuPackage$createReactActivityHandlers$1$createReactRootViewContainer$lambda$0$$inlined$viewModels$default$3;-><init>(Lkotlin/jvm/functions/Function0;Landroidx/activity/ComponentActivity;)V

    check-cast v7, Lkotlin/jvm/functions/Function0;

    .line 99
    invoke-direct {v4, v5, v6, v3, v7}, Landroidx/lifecycle/ViewModelLazy;-><init>(Lkotlin/reflect/KClass;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V

    check-cast v4, Lkotlin/Lazy;

    .line 68
    invoke-direct {v2, v1, v4}, Lexpo/modules/devmenu/compose/BindingView;-><init>(Landroid/content/Context;Lkotlin/Lazy;)V

    check-cast v2, Landroid/view/View;

    invoke-virtual {v0, v2}, Landroid/widget/FrameLayout;->addView(Landroid/view/View;)V

    .line 67
    check-cast v0, Landroid/view/ViewGroup;

    return-object v0
.end method

.method public onKeyUp(ILandroid/view/KeyEvent;)Z
    .locals 1

    const-string v0, "event"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 73
    sget-object v0, Lexpo/modules/devmenu/DevMenuManager;->INSTANCE:Lexpo/modules/devmenu/DevMenuManager;

    invoke-virtual {v0, p1, p2}, Lexpo/modules/devmenu/DevMenuManager;->onKeyEvent(ILandroid/view/KeyEvent;)Z

    move-result p1

    return p1
.end method
