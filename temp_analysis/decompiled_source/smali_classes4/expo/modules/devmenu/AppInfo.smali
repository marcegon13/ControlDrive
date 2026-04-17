.class public final Lexpo/modules/devmenu/AppInfo;
.super Ljava/lang/Object;
.source "AppInfo.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lexpo/modules/devmenu/AppInfo$Native;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\u0008\u00c7\u0002\u0018\u00002\u00020\u0001:\u0001\u0013B\t\u0008\u0002\u00a2\u0006\u0004\u0008\u0002\u0010\u0003J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\u000c\u001a\u00020\rJ\u0010\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u000c\u001a\u00020\rH\u0002J\u000e\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086.\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0006\u0010\u0007\"\u0004\u0008\u0008\u0010\t\u00a8\u0006\u0014"
    }
    d2 = {
        "Lexpo/modules/devmenu/AppInfo;",
        "",
        "<init>",
        "()V",
        "native",
        "Lexpo/modules/devmenu/AppInfo$Native;",
        "getNative",
        "()Lexpo/modules/devmenu/AppInfo$Native;",
        "setNative",
        "(Lexpo/modules/devmenu/AppInfo$Native;)V",
        "init",
        "",
        "application",
        "Landroid/app/Application;",
        "getNativeAppInfo",
        "getAppInfo",
        "Lexpo/modules/devmenu/compose/DevMenuState$AppInfo;",
        "reactHost",
        "Lexpo/interfaces/devmenu/ReactHostWrapper;",
        "Native",
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


# static fields
.field public static final $stable:I

.field public static final INSTANCE:Lexpo/modules/devmenu/AppInfo;

.field public static native:Lexpo/modules/devmenu/AppInfo$Native;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lexpo/modules/devmenu/AppInfo;

    invoke-direct {v0}, Lexpo/modules/devmenu/AppInfo;-><init>()V

    sput-object v0, Lexpo/modules/devmenu/AppInfo;->INSTANCE:Lexpo/modules/devmenu/AppInfo;

    const/16 v0, 0x8

    sput v0, Lexpo/modules/devmenu/AppInfo;->$stable:I

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private final getNativeAppInfo(Landroid/app/Application;)Lexpo/modules/devmenu/AppInfo$Native;
    .locals 3

    .line 22
    invoke-virtual {p1}, Landroid/app/Application;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    .line 23
    invoke-virtual {p1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object p1

    const/4 v1, 0x0

    .line 24
    invoke-virtual {v0, p1, v1}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v1

    .line 26
    iget-object v1, v1, Landroid/content/pm/PackageInfo;->versionName:Ljava/lang/String;

    const/16 v2, 0x80

    .line 27
    invoke-virtual {v0, p1, v2}, Landroid/content/pm/PackageManager;->getApplicationInfo(Ljava/lang/String;I)Landroid/content/pm/ApplicationInfo;

    move-result-object p1

    const-string v2, "getApplicationInfo(...)"

    invoke-static {p1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 28
    invoke-virtual {v0, p1}, Landroid/content/pm/PackageManager;->getApplicationLabel(Landroid/content/pm/ApplicationInfo;)Ljava/lang/CharSequence;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    .line 30
    new-instance v0, Lexpo/modules/devmenu/AppInfo$Native;

    invoke-direct {v0, p1, v1}, Lexpo/modules/devmenu/AppInfo$Native;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method public final getAppInfo(Lexpo/interfaces/devmenu/ReactHostWrapper;)Lexpo/modules/devmenu/compose/DevMenuState$AppInfo;
    .locals 16

    const-string v0, "reactHost"

    move-object/from16 v1, p1

    invoke-static {v1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 38
    invoke-virtual/range {p0 .. p0}, Lexpo/modules/devmenu/AppInfo;->getNative()Lexpo/modules/devmenu/AppInfo$Native;

    move-result-object v0

    invoke-virtual {v0}, Lexpo/modules/devmenu/AppInfo$Native;->getAppName()Ljava/lang/String;

    move-result-object v0

    .line 39
    invoke-virtual/range {p0 .. p0}, Lexpo/modules/devmenu/AppInfo;->getNative()Lexpo/modules/devmenu/AppInfo$Native;

    move-result-object v2

    invoke-virtual {v2}, Lexpo/modules/devmenu/AppInfo$Native;->getAppVersion()Ljava/lang/String;

    move-result-object v2

    .line 41
    invoke-virtual {v1}, Lexpo/interfaces/devmenu/ReactHostWrapper;->getCurrentReactContext()Lcom/facebook/react/bridge/ReactContext;

    move-result-object v3

    const/4 v4, 0x0

    if-eqz v3, :cond_0

    invoke-virtual {v3}, Lcom/facebook/react/bridge/ReactContext;->getSourceURL()Ljava/lang/String;

    move-result-object v3

    goto :goto_0

    :cond_0
    move-object v3, v4

    .line 43
    :goto_0
    sget-object v5, Lexpo/modules/devmenu/DevMenuManager;->INSTANCE:Lexpo/modules/devmenu/DevMenuManager;

    invoke-virtual {v5}, Lexpo/modules/devmenu/DevMenuManager;->getCurrentManifest()Lexpo/modules/manifests/core/Manifest;

    move-result-object v5

    .line 45
    const-string v6, ""

    if-eqz v5, :cond_3

    .line 46
    invoke-virtual {v5}, Lexpo/modules/manifests/core/Manifest;->getName()Ljava/lang/String;

    move-result-object v7

    if-eqz v7, :cond_1

    move-object v0, v7

    .line 51
    :cond_1
    invoke-virtual {v5}, Lexpo/modules/manifests/core/Manifest;->getVersion()Ljava/lang/String;

    move-result-object v7

    if-eqz v7, :cond_2

    move-object v2, v7

    .line 56
    :cond_2
    instance-of v7, v5, Lexpo/modules/manifests/core/ExpoUpdatesManifest;

    if-eqz v7, :cond_3

    .line 57
    check-cast v5, Lexpo/modules/manifests/core/ExpoUpdatesManifest;

    invoke-virtual {v5}, Lexpo/modules/manifests/core/ExpoUpdatesManifest;->getRuntimeVersion()Ljava/lang/String;

    move-result-object v6

    :cond_3
    move-object v8, v0

    move-object v10, v2

    move-object v11, v6

    .line 61
    sget-object v0, Lexpo/modules/devmenu/DevMenuManager;->INSTANCE:Lexpo/modules/devmenu/DevMenuManager;

    invoke-virtual {v0}, Lexpo/modules/devmenu/DevMenuManager;->getCurrentManifestURL()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_4

    .line 62
    sget-object v0, Lexpo/modules/devmenu/DevMenuManager;->INSTANCE:Lexpo/modules/devmenu/DevMenuManager;

    invoke-virtual {v0}, Lexpo/modules/devmenu/DevMenuManager;->getCurrentManifestURL()Ljava/lang/String;

    move-result-object v3

    .line 65
    :cond_4
    invoke-virtual {v1}, Lexpo/interfaces/devmenu/ReactHostWrapper;->getJsExecutorName()Ljava/lang/String;

    move-result-object v0

    .line 67
    check-cast v0, Ljava/lang/CharSequence;

    const-string v1, "Hermes"

    move-object v2, v1

    check-cast v2, Ljava/lang/CharSequence;

    const/4 v5, 0x0

    const/4 v6, 0x2

    invoke-static {v0, v2, v5, v6, v4}, Lkotlin/text/StringsKt;->contains$default(Ljava/lang/CharSequence;Ljava/lang/CharSequence;ZILjava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_5

    :goto_1
    move-object v13, v1

    goto :goto_2

    .line 68
    :cond_5
    const-string v1, "V8"

    move-object v2, v1

    check-cast v2, Ljava/lang/CharSequence;

    invoke-static {v0, v2, v5, v6, v4}, Lkotlin/text/StringsKt;->contains$default(Ljava/lang/CharSequence;Ljava/lang/CharSequence;ZILjava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    goto :goto_1

    .line 69
    :cond_6
    const-string v1, "JSC"

    goto :goto_1

    :goto_2
    if-nez v3, :cond_7

    .line 76
    const-string v3, "Unknown"

    :cond_7
    move-object v9, v3

    .line 72
    new-instance v7, Lexpo/modules/devmenu/compose/DevMenuState$AppInfo;

    const/16 v14, 0x10

    const/4 v15, 0x0

    const/4 v12, 0x0

    invoke-direct/range {v7 .. v15}, Lexpo/modules/devmenu/compose/DevMenuState$AppInfo;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILkotlin/jvm/internal/DefaultConstructorMarker;)V

    return-object v7
.end method

.method public final getNative()Lexpo/modules/devmenu/AppInfo$Native;
    .locals 1

    .line 15
    sget-object v0, Lexpo/modules/devmenu/AppInfo;->native:Lexpo/modules/devmenu/AppInfo$Native;

    if-eqz v0, :cond_0

    return-object v0

    :cond_0
    const-string v0, "native"

    invoke-static {v0}, Lkotlin/jvm/internal/Intrinsics;->throwUninitializedPropertyAccessException(Ljava/lang/String;)V

    const/4 v0, 0x0

    return-object v0
.end method

.method public final init(Landroid/app/Application;)V
    .locals 1

    const-string v0, "application"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 18
    invoke-direct {p0, p1}, Lexpo/modules/devmenu/AppInfo;->getNativeAppInfo(Landroid/app/Application;)Lexpo/modules/devmenu/AppInfo$Native;

    move-result-object p1

    invoke-virtual {p0, p1}, Lexpo/modules/devmenu/AppInfo;->setNative(Lexpo/modules/devmenu/AppInfo$Native;)V

    return-void
.end method

.method public final setNative(Lexpo/modules/devmenu/AppInfo$Native;)V
    .locals 1

    const-string v0, "<set-?>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 15
    sput-object p1, Lexpo/modules/devmenu/AppInfo;->native:Lexpo/modules/devmenu/AppInfo$Native;

    return-void
.end method
