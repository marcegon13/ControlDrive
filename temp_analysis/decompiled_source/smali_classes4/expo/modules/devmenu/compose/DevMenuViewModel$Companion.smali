.class public final Lexpo/modules/devmenu/compose/DevMenuViewModel$Companion;
.super Ljava/lang/Object;
.source "DevMenuViewModel.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lexpo/modules/devmenu/compose/DevMenuViewModel;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Companion"
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nDevMenuViewModel.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DevMenuViewModel.kt\nexpo/modules/devmenu/compose/DevMenuViewModel$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,88:1\n1563#2:89\n1634#2,3:90\n*S KotlinDebug\n*F\n+ 1 DevMenuViewModel.kt\nexpo/modules/devmenu/compose/DevMenuViewModel$Companion\n*L\n85#1:89\n85#1:90,3\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0008\u0086\u0003\u0018\u00002\u00020\u0001B\t\u0008\u0002\u00a2\u0006\u0004\u0008\u0002\u0010\u0003J\u001c\u0010\u0004\u001a\u0008\u0012\u0004\u0012\u00020\u00060\u00052\u000c\u0010\u0007\u001a\u0008\u0012\u0004\u0012\u00020\u00080\u0005H\u0002\u00a8\u0006\t"
    }
    d2 = {
        "Lexpo/modules/devmenu/compose/DevMenuViewModel$Companion;",
        "",
        "<init>",
        "()V",
        "mapCallbacks",
        "",
        "Lexpo/modules/devmenu/compose/DevMenuState$CustomItem;",
        "callbacks",
        "Lexpo/modules/devmenu/DevMenuManager$Callback;",
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
.method private constructor <init>()V
    .locals 0

    .line 83
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public synthetic constructor <init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    invoke-direct {p0}, Lexpo/modules/devmenu/compose/DevMenuViewModel$Companion;-><init>()V

    return-void
.end method

.method public static final synthetic access$mapCallbacks(Lexpo/modules/devmenu/compose/DevMenuViewModel$Companion;Ljava/util/List;)Ljava/util/List;
    .locals 0

    .line 83
    invoke-direct {p0, p1}, Lexpo/modules/devmenu/compose/DevMenuViewModel$Companion;->mapCallbacks(Ljava/util/List;)Ljava/util/List;

    move-result-object p0

    return-object p0
.end method

.method private final mapCallbacks(Ljava/util/List;)Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lexpo/modules/devmenu/DevMenuManager$Callback;",
            ">;)",
            "Ljava/util/List<",
            "Lexpo/modules/devmenu/compose/DevMenuState$CustomItem;",
            ">;"
        }
    .end annotation

    .line 85
    check-cast p1, Ljava/lang/Iterable;

    .line 89
    new-instance v0, Ljava/util/ArrayList;

    const/16 v1, 0xa

    invoke-static {p1, v1}, Lkotlin/collections/CollectionsKt;->collectionSizeOrDefault(Ljava/lang/Iterable;I)I

    move-result v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    check-cast v0, Ljava/util/Collection;

    .line 90
    invoke-interface {p1}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    .line 91
    check-cast v1, Lexpo/modules/devmenu/DevMenuManager$Callback;

    .line 85
    new-instance v2, Lexpo/modules/devmenu/compose/DevMenuState$CustomItem;

    invoke-virtual {v1}, Lexpo/modules/devmenu/DevMenuManager$Callback;->getName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1}, Lexpo/modules/devmenu/DevMenuManager$Callback;->getShouldCollapse()Z

    move-result v1

    invoke-direct {v2, v3, v1}, Lexpo/modules/devmenu/compose/DevMenuState$CustomItem;-><init>(Ljava/lang/String;Z)V

    .line 91
    invoke-interface {v0, v2}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 92
    :cond_0
    check-cast v0, Ljava/util/List;

    return-object v0
.end method
