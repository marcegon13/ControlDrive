.class final Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;
.super Lcom/composables/core/androidx/collection/ScatterSet$SetWrapper;
.source "ScatterSet.kt"

# interfaces
.implements Ljava/util/Set;
.implements Lkotlin/jvm/internal/markers/KMutableSet;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/composables/core/androidx/collection/MutableScatterSet;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x12
    name = "MutableSetWrapper"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/composables/core/androidx/collection/ScatterSet<",
        "TE;>.SetWrapper;",
        "Ljava/util/Set<",
        "TE;>;",
        "Lkotlin/jvm/internal/markers/KMutableSet;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nScatterSet.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScatterSet.kt\ncom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper\n+ 2 ScatterSet.kt\ncom/composables/core/androidx/collection/ScatterSet\n+ 3 ScatterMap.kt\ncom/composables/core/androidx/collection/ScatterMapKt\n*L\n1#1,1103:1\n205#2,6:1104\n215#2,3:1111\n218#2,9:1115\n1956#3:1110\n1820#3:1114\n*S KotlinDebug\n*F\n+ 1 ScatterSet.kt\ncom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper\n*L\n1083#1:1104,6\n1083#1:1111,3\n1083#1:1115,9\n1083#1:1110\n1083#1:1114\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010#\n\u0002\u0008\u0003\n\u0002\u0010\u000b\n\u0002\u0008\u0004\n\u0002\u0010\u001e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010)\n\u0002\u0008\u0004\u0008\u0082\u0004\u0018\u00002\u000c0\u0001R\u0008\u0012\u0004\u0012\u00028\u00000\u00022\u0008\u0012\u0004\u0012\u00028\u00000\u0003B\u0007\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0015\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u0008\u001a\u00028\u0000H\u0016\u00a2\u0006\u0002\u0010\tJ\u0016\u0010\n\u001a\u00020\u00072\u000c\u0010\u000b\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u000cH\u0016J\u0008\u0010\r\u001a\u00020\u000eH\u0016J\u000f\u0010\u000f\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u0010H\u0096\u0002J\u0015\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0008\u001a\u00028\u0000H\u0016\u00a2\u0006\u0002\u0010\tJ\u0016\u0010\u0012\u001a\u00020\u00072\u000c\u0010\u000b\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u000cH\u0016J\u0016\u0010\u0013\u001a\u00020\u00072\u000c\u0010\u000b\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u000cH\u0016\u00a8\u0006\u0014"
    }
    d2 = {
        "Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;",
        "Lcom/composables/core/androidx/collection/ScatterSet$SetWrapper;",
        "Lcom/composables/core/androidx/collection/ScatterSet;",
        "",
        "<init>",
        "(Lcom/composables/core/androidx/collection/MutableScatterSet;)V",
        "add",
        "",
        "element",
        "(Ljava/lang/Object;)Z",
        "addAll",
        "elements",
        "",
        "clear",
        "",
        "iterator",
        "",
        "remove",
        "retainAll",
        "removeAll",
        "core_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/composables/core/androidx/collection/MutableScatterSet<",
            "TE;>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Lcom/composables/core/androidx/collection/MutableScatterSet;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 1047
    iput-object p1, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    check-cast p1, Lcom/composables/core/androidx/collection/ScatterSet;

    invoke-direct {p0, p1}, Lcom/composables/core/androidx/collection/ScatterSet$SetWrapper;-><init>(Lcom/composables/core/androidx/collection/ScatterSet;)V

    return-void
.end method


# virtual methods
.method public add(Ljava/lang/Object;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TE;)Z"
        }
    .end annotation

    .line 1048
    iget-object v0, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {v0, p1}, Lcom/composables/core/androidx/collection/MutableScatterSet;->add(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public addAll(Ljava/util/Collection;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "+TE;>;)Z"
        }
    .end annotation

    const-string v0, "elements"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 1051
    iget-object v0, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    check-cast p1, Ljava/lang/Iterable;

    invoke-virtual {v0, p1}, Lcom/composables/core/androidx/collection/MutableScatterSet;->addAll(Ljava/lang/Iterable;)Z

    move-result p1

    return p1
.end method

.method public clear()V
    .locals 1

    .line 1054
    iget-object v0, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {v0}, Lcom/composables/core/androidx/collection/MutableScatterSet;->clear()V

    return-void
.end method

.method public iterator()Ljava/util/Iterator;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Iterator<",
            "TE;>;"
        }
    .end annotation

    .line 1058
    new-instance v0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper$iterator$1;

    iget-object v1, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-direct {v0, v1}, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper$iterator$1;-><init>(Lcom/composables/core/androidx/collection/MutableScatterSet;)V

    check-cast v0, Ljava/util/Iterator;

    return-object v0
.end method

.method public remove(Ljava/lang/Object;)Z
    .locals 1

    .line 1079
    iget-object v0, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {v0, p1}, Lcom/composables/core/androidx/collection/MutableScatterSet;->remove(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public removeAll(Ljava/util/Collection;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "*>;)Z"
        }
    .end annotation

    const-string v0, "elements"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 1095
    iget-object v0, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {v0}, Lcom/composables/core/androidx/collection/MutableScatterSet;->getSize()I

    move-result v0

    .line 1096
    invoke-interface {p1}, Ljava/util/Collection;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    .line 1097
    iget-object v2, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {v2, v1}, Lcom/composables/core/androidx/collection/MutableScatterSet;->minusAssign(Ljava/lang/Object;)V

    goto :goto_0

    .line 1099
    :cond_0
    iget-object p1, p0, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    invoke-virtual {p1}, Lcom/composables/core/androidx/collection/MutableScatterSet;->getSize()I

    move-result p1

    if-eq v0, p1, :cond_1

    const/4 p1, 0x1

    return p1

    :cond_1
    const/4 p1, 0x0

    return p1
.end method

.method public retainAll(Ljava/util/Collection;)Z
    .locals 17
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "*>;)Z"
        }
    .end annotation

    move-object/from16 v0, p1

    const-string v1, "elements"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    move-object/from16 v1, p0

    .line 1083
    iget-object v2, v1, Lcom/composables/core/androidx/collection/MutableScatterSet$MutableSetWrapper;->this$0:Lcom/composables/core/androidx/collection/MutableScatterSet;

    move-object v3, v2

    check-cast v3, Lcom/composables/core/androidx/collection/ScatterSet;

    .line 1104
    iget-object v3, v3, Lcom/composables/core/androidx/collection/ScatterSet;->metadata:[J

    .line 1105
    array-length v4, v3

    add-int/lit8 v4, v4, -0x2

    const/4 v5, 0x0

    if-ltz v4, :cond_5

    move v6, v5

    move v7, v6

    .line 1108
    :goto_0
    aget-wide v8, v3, v6

    not-long v10, v8

    const/4 v12, 0x7

    shl-long/2addr v10, v12

    and-long/2addr v10, v8

    const-wide v12, -0x7f7f7f7f7f7f7f80L    # -2.937446524422997E-306

    and-long/2addr v10, v12

    cmp-long v10, v10, v12

    if-eqz v10, :cond_3

    sub-int v10, v6, v4

    not-int v10, v10

    ushr-int/lit8 v10, v10, 0x1f

    const/16 v11, 0x8

    rsub-int/lit8 v10, v10, 0x8

    move v12, v5

    :goto_1
    if-ge v12, v10, :cond_1

    const-wide/16 v13, 0xff

    and-long/2addr v13, v8

    const-wide/16 v15, 0x80

    cmp-long v13, v13, v15

    if-gez v13, :cond_0

    shl-int/lit8 v13, v6, 0x3

    add-int/2addr v13, v12

    .line 1085
    iget-object v14, v2, Lcom/composables/core/androidx/collection/MutableScatterSet;->elements:[Ljava/lang/Object;

    aget-object v14, v14, v13

    .line 1086
    invoke-interface {v0, v14}, Ljava/util/Collection;->contains(Ljava/lang/Object;)Z

    move-result v14

    if-nez v14, :cond_0

    .line 1087
    invoke-virtual {v2, v13}, Lcom/composables/core/androidx/collection/MutableScatterSet;->removeElementAt(I)V

    const/4 v7, 0x1

    :cond_0
    shr-long/2addr v8, v11

    add-int/lit8 v12, v12, 0x1

    goto :goto_1

    :cond_1
    if-ne v10, v11, :cond_2

    goto :goto_2

    :cond_2
    return v7

    :cond_3
    :goto_2
    if-eq v6, v4, :cond_4

    add-int/lit8 v6, v6, 0x1

    goto :goto_0

    :cond_4
    return v7

    :cond_5
    return v5
.end method
